# Node.js & npm

## Node.js
A JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run outside the browser — on servers, CLI tools, or desktop apps. Uses an event-driven, non-blocking I/O model.

## Module Systems
Two module systems exist in Node.js:

| System | Syntax | File / package.json |
|---|---|---|
| CommonJS (CJS) | `require()` / `module.exports` | default |
| ES Modules (ESM) | `import` / `export` | `"type": "module"` in package.json |

```js
// CommonJS
const fs = require('fs');
module.exports = myFunction;

// ES Module
import fs from 'fs';
export default myFunction;
```

Set `"type": "module"` in `package.json` to use ESM syntax across the project.

---

## npm (Node Package Manager)
npm is the default package manager for Node.js. It manages third-party libraries (packages) and project metadata.

### Init
```bash
npm init        # interactive setup
npm init -y     # skip prompts, use defaults
```

### package.json — key fields
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

| Field | Purpose |
|---|---|
| `name` | project name |
| `version` | semver version |
| `type` | `"module"` enables ESM |
| `scripts` | shorthand commands via `npm run` |
| `dependencies` | packages needed in production |
| `devDependencies` | packages needed only during development |

### Installing packages
```bash
npm install express           # adds to dependencies
npm install nodemon --save-dev  # adds to devDependencies
npm install                   # installs all from package.json
```

### Running scripts
```bash
npm start         # runs "start" script
npm run dev       # runs any custom script
```

### node_modules
Auto-generated folder containing all installed packages. Never commit to Git — add to `.gitignore`.
node_modules/
`package-lock.json` locks exact versions of every installed dependency. Commit this to Git.

---

## Built-in Modules (commonly used)

| Module | Purpose |
|---|---|
| `fs` | file system read/write |
| `http` | create HTTP servers |
| `path` | handle file paths |
| `os` | OS-level info |

```js
import fs from 'fs';

// async write (non-blocking)
fs.appendFile('log.txt', 'some data\n', (err) => {
  if (err) console.log(err);
});

// sync read (blocking)
const data = fs.readFileSync('file.txt', 'utf-8');
```