# Express.js — REST API & MVC Architecture

## REST API
REST (Representational State Transfer) is an architectural style for designing networked APIs. A REST API uses HTTP methods to perform operations on resources identified by URLs.

### RESTful Route Design
| Method | Route | Action |
|---|---|---|
| GET | `/users` | fetch all users |
| GET | `/users/:id` | fetch single user |
| POST | `/users` | create new user |
| PATCH | `/users/:id` | partially update user |
| DELETE | `/users/:id` | delete user |

---

## MVC Architecture

Separates the application into three layers:

| Layer | Folder | Responsibility |
|---|---|---|
| Model | `models/` | database schema + data interaction |
| View | (optional) | HTML rendering / frontend |
| Controller | `controllers/` | handles request, calls model, sends response |
| Router | `routes/` | maps URLs to controller functions |

rest/
├── controllers/
│   └── user.js       ← business logic, calls model
├── middleware/
│   └── index.js      ← logging, parsing, etc.
├── models/
│   └── user.js       ← Mongoose schema + model
├── routes/
│   └── user.js       ← route definitions
├── connection.js     ← MongoDB connection
└── index.js          ← app entry point
---

## Entry Point (index.js)

```js
import express from 'express';
import connectMongoDB from './connection.js';
import logReqRes from './middleware/index.js';
import userRouter from './routes/user.js';

const app = express();

connectMongoDB('mongodb://127.0.0.1:27017/first-app-1')
  .then(() => console.log('MongoDB Connected'));  // pass a function, not a call

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logReqRes('log.txt'));
app.use('/users', userRouter);

app.listen(8080, () => console.log('Server started on port 8080'));
```

---

## Routes (routes/user.js)

```js
import express from 'express';
import {
  handleGetAllUsers, getUserById,
  handleCreateNewUser, handleUpdateUserById,
  handleDeleteUserById
} from '../controllers/user.js';

const router = express.Router();

router.route('/').get(handleGetAllUsers).post(handleCreateNewUser);
router.route('/:id').get(getUserById).patch(handleUpdateUserById).delete(handleDeleteUserById);

export default router;
```

`router.route()` chains multiple methods on the same path — avoids repetition.

---

## Controllers (controllers/user.js)

```js
import User from '../models/user.js';

export async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.status(200).json(allUsers);
}

export async function getUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ status: 'failed', message: 'User not found' });
  return res.status(200).json(user);
}

export async function handleCreateNewUser(req, res) {
  const { firstName, lastName, email, gender, jobTitle } = req.body;
  if (!firstName || !lastName || !email)
    return res.status(400).json({ status: 'failed', message: 'Missing required fields' });

  const result = await User.create({ firstName, lastName, email, gender, jobTitle });
  return res.status(201).json({ msg: 'Success' });
}

export async function handleUpdateUserById(req, res) {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedUser) return res.status(404).json({ status: 'failed', message: 'User not found' });
  return res.status(200).json({ status: 'success', user: updatedUser });
}

export async function handleDeleteUserById(req, res) {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) return res.status(404).json({ status: 'failed', message: 'User not found' });
  return res.status(200).json({ status: 'success', message: 'User deleted successfully' });
}
```

`{ new: true }` in `findByIdAndUpdate` returns the updated document, not the original.

---

## Separation of Concerns — Why MVC

Without MVC, all logic sits in one file — unreadable and unscalable. MVC enforces:
- Routes only map paths to handlers
- Controllers only handle request/response logic
- Models only define data structure and DB interaction
- Middleware only handles cross-cutting concerns (logging, parsing, auth)