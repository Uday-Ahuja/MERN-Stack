# Node.js — HTTP Module & Servers

## http Module
Node's built-in `http` module lets you create raw HTTP servers without any framework.

```js
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(8080, () => console.log('Server running on port 8080'));
```

`req` — incoming request object (method, url, headers, body)
`res` — outgoing response object (status, headers, body)

---

## HTTP Methods

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create new resource |
| PUT | Replace entire resource |
| PATCH | Partially update resource |
| DELETE | Remove resource |

---

## HTTP Status Codes

### Ranges
| Range | Category |
|---|---|
| 100–199 | Informational |
| 200–299 | Success |
| 300–399 | Redirection |
| 400–499 | Client errors |
| 500–599 | Server errors |

### Commonly used
| Code | Meaning | When to use |
|---|---|---|
| 200 | OK | Successful GET, PATCH, DELETE |
| 201 | Created | Successful POST (resource created) |
| 302 | Found (Redirect) | Temporary redirect to another URL |
| 400 | Bad Request | Missing/invalid fields in request |
| 401 | Unauthorized | Not authenticated |
| 403 | Forbidden | Authenticated but not permitted |
| 404 | Not Found | Resource doesn't exist |
| 500 | Internal Server Error | Unhandled server-side failure |

---

## Routing with raw http (basic pattern)
```js
const server = http.createServer((req, res) => {
  if (req.url === '/home' && req.method === 'GET') {
    res.writeHead(200);
    res.end('Home Page');
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ users: [] }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});
```

Raw `http` routing gets messy fast — this is why Express exists.