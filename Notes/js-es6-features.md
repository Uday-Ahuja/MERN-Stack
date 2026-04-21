# JavaScript — ES6 Features

---

## var vs let vs const

```js
// var — function scoped, re-declarable
var a = 10;
var a = 20;        // ✅ no error
console.log(a);    // → 20

function test(){
    var b = 30;
}
console.log(b);    // ❌ ReferenceError — var is function scoped
```

| | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block `{}` | Block `{}` |
| Re-declare | ✅ | ❌ | ❌ |
| Re-assign | ✅ | ✅ | ❌ |
| Hoisted | ✅ (as undefined) | ✅ (but not initialized) | ✅ (but not initialized) |
| Use in modern JS | Avoid | Variables | Fixed values |

```js
// let — block scoped
let x = 10;
if(true){
    let x = 20;    // different x — block scope
    console.log(x); // → 20
}
console.log(x);    // → 10

// const — can't reassign
const PI = 3.14;
PI = 3;            // ❌ TypeError
```

> Use `const` by default. Use `let` when you need to reassign. Never use `var` in new code.

---

## Spread Operator `...`

Expands an array or object into individual elements.

```js
// Copy array
let arr = [1,2,3];
let arr2 = [...arr];
console.log(arr2);   // → [1,2,3]

// Merge arrays
let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [...arr1, ...arr2];
console.log(arr3);   // → [1,2,3,4]

// Merge/extend objects
let obj1 = {a:1, b:2};
let obj2 = {...obj1, c:3};
console.log(obj2);   // → {a:1, b:2, c:3}
```

---

## Rest Parameter `...`

Collects multiple arguments into an array. Same syntax as spread — context determines which it is.

```js
function add(...args){     // rest — collects all args into array
    let sum = 0;
    for(let i of args) sum += i;
    console.log(sum);
}
add(1,2);       // → 3
add(1,2,3,4);   // → 10
```

| | Spread | Rest |
|---|---|---|
| Used in | Function call / array literal | Function definition |
| Does | Expands array into elements | Collects elements into array |

---

## Babel Setup (ES6 in Node)

ES6 classes/modules need Babel to run in Node environments that don't support them natively.

```bash
npm init -y
npm install @babel/core @babel/node @babel/preset-env babel-plugin-add-module-exports
```

`package.json` for reference:
```json
{
  "name": "es6",
  "version": "1.0.0",
  "dependencies": {
    "@babel/core": "...",
    "@babel/node": "...",
    "@babel/preset-env": "...",
    "babel-plugin-add-module-exports": "..."
  }
}
```

Run files with Babel instead of plain Node:
```bash
npx babel-node filename.js
```

`package-lock.json` — auto-generated, locks exact dependency versions. Don't edit manually.

---

## Common Mistakes

- `const` with objects — the reference is fixed, not the contents. `obj.a = 5` works even on `const obj`.
- Spread on object inside array literal — needs `{}` not `[]`: `{...obj}` not `[...obj]`.
- Rest param must be last — `function f(a, ...args)` ✅, `function f(...args, a)` ❌ SyntaxError.
- `var` in loops leaks out — `for(var i...)` makes `i` accessible after loop. Use `let`.