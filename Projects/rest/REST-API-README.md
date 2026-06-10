# REST API

A RESTful API built with Node.js, Express.js, and MongoDB (Mongoose) following MVC architecture, built as part of MERN stack learning.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- MVC Architecture

---
## Project Structure
├── models/
│   └── user.js
├── controllers/
│   └── user.js
├── middleware/
│   └── index.js
├── routes/
│   └── user.js
├── connection.js
└── index.js

---

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running (local or Atlas)

### Installation

```bash
git clone https://github.com/Uday-Ahuja/MERN-Stack.git
cd <your-folder-path>
npm install
```

### Run the Server

```bash
node index.js
```

---

## API Endpoints

Base URL: `http://localhost:8000/api/users`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Get all users |
| POST | / | Create new user |
| GET | /view | Render HTML users list |
| GET | /:id | Get user by ID |
| PATCH | /:id | Update user by ID |
| DELETE | /:id | Delete user by ID |

---

## Notes

- Initially built with mock data generated via Mockaroo
- Migrated to MongoDB for persistent storage
- Follows MVC pattern — routes, controllers, and models are separated