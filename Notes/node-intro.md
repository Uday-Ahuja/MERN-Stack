# Node.js — Introduction

---

## What is Node.js

JavaScript-based **server-side runtime environment** — runs JS outside the browser, on the server.

- Invented by **Ryan Dahl** (2009)
- Website: nodejs.org | LTS: 24.x
- Open source, cross-platform, portable

Before Node.js, JS was frontend only. Node.js made JS full-stack — same language on both ends (why MERN works).

---

## Key Features

| Feature | Notes |
|---|---|
| Module-based | Code split into reusable modules |
| NPM | Node Package Manager — install third-party packages |
| `package.json` | Config file: name, version, dependencies, scripts, author |
| Non-blocking I/O | Async by default — handles multiple requests without waiting |
| Platform independent | Code runs on any OS |
| Object-oriented | Everything treated as object |

---

## package.json

Auto-generated when you run `npm init`. Tracks project metadata and dependencies.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "author": "Uday",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

---

## Setup

1. Go to nodejs.org
2. Download LTS installer
3. Run installer → accept terms → set path → next
4. Verify in terminal:

```bash
node -v
npm -v
```

---

## Running JS with Node

```bash
node filename.js
```

Output goes to terminal — no browser, no `document.write()`. Use `console.log()`.

```js
// p1.js
console.log("Program 1 Execution");
```

```bash
node p1.js   # → Program 1 Execution
```

---

## Common Mistakes

- Using `document.write()` in Node — no DOM, throws ReferenceError. Node uses `console.log()`.
- Not running `npm init` before installing packages — `package.json` won't exist, dependency tracking breaks.