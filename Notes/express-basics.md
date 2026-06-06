# Express.js — Basics, Routing & Middleware

## What is Express?
A minimal, unopinionated web framework for Node.js that simplifies HTTP server creation, routing, and middleware management. Sits on top of Node's `http` module.

```bash
npm install express
```

```js
import express from 'express';
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
```

---

## Routing

A route maps an HTTP method + URL path to a handler function.

```js
app.get('/home', (req, res) => res.send('Home'));
app.post('/users', (req, res) => res.status(201).json({ msg: 'created' }));
```

### Route Parameters
Dynamic segments in the URL, accessed via `req.params`.

```js
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id });
});
```

### Query Parameters
Key-value pairs after `?` in the URL, accessed via `req.query`.

```
GET /users?role=admin&limit=10
```
```js
app.get('/users', (req, res) => {
  const { role, limit } = req.query;
  res.json({ role, limit });
});
```

### express.Router()
Groups related routes into a modular router, then mounted on the main app.

```js
// routes/user.js
import express from 'express';
const router = express.Router();

router.route('/')
  .get(handleGetAll)
  .post(handleCreate);

router.route('/:id')
  .get(getById)
  .patch(handleUpdate)
  .delete(handleDelete);

export default router;

// index.js
app.use('/users', userRouter);
```

All routes inside `userRouter` are now prefixed with `/users`.

---

## Middleware

Middleware is a function that executes during the request-response cycle, between receiving the request and sending the response. It has access to `req`, `res`, and `next`.

```js
function myMiddleware(req, res, next) {
  // do something
  next(); // pass control to next middleware/route
}
```

**If `next()` is not called, the request hangs.**

### Built-in Middleware

```js
app.use(express.json());                      // parses JSON request body → req.body
app.use(express.urlencoded({ extended: false })); // parses form data → req.body
```

### Custom Middleware — factory pattern
A function that returns a middleware function. Used when the middleware needs configuration (e.g., a filename to log to).

```js
// middleware/index.js
import fs from 'fs';

function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`,
      (err) => { if (err) console.log(err); }
    );
    next();
  };
}

export default logReqRes;

// index.js
import logReqRes from './middleware/index.js';
app.use(logReqRes('log.txt'));
```

### Middleware Execution Order
Order of `app.use()` calls matters — middleware runs top to bottom.

```js
app.use(express.json());       // 1st
app.use(logReqRes('log.txt')); // 2nd
app.use('/users', userRouter); // 3rd — routes last
```

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Forgetting `next()` in middleware | Request hangs with no response |
| Placing routes before `express.json()` | `req.body` is undefined |
| `.then(console.log("..."))` | Runs immediately — use `.then(() => console.log("..."))` |