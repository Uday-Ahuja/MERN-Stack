# JavaScript — Async: Callbacks, Promises, Async/Await

Evolution of async handling: **Callbacks → Promises (ES2015) → Async/Await (ES2017)**

---

## Sync vs Async

```js
// Synchronous — blocking, runs in order
function task1(){ console.log("Task 1"); }
function task2(){ console.log("Task 2"); }
task1(); task2();
// → Task 1, Task 2 (always in order)

// Asynchronous — non-blocking
function task1(){ console.log("Task 1"); }
function task2(){
    setTimeout(function(){
        console.log("Task 2");
    }, 2000);
}
task1(); task2();
// → Task 1 (immediately), Task 2 (after 2s)
```

| | Sync | Async |
|---|---|---|
| Execution | Blocks until done | Continues without waiting |
| Default in JS | Yes | No — needs callbacks/promises/async |
| Example | Normal function | setTimeout, API call, file read |

---

## Callbacks

Function passed as argument to another function, executed after the main function completes.

```js
// Basic callback
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
function done(){ console.log("Done"); }
greet("Uday", done);

// Callback with args
function add(a, b, callback){
    callback(a + b);
}
add(5, 3, function(result){
    console.log(result);   // → 8
});

// Async callback — setTimeout
function fetchData(callback){
    setTimeout(function(){
        callback("Data Loaded");
    }, 2000);
}
fetchData(function(data){
    console.log(data);   // → Data Loaded (after 2s)
});
```

---

## Callback Hell

Deeply nested callbacks — happens when multiple async operations depend on each other:

```js
// Sequential steps via nested callbacks
step1(function(){
    step2(function(){
        console.log("Done");
    });
});

// Worse — setTimeout chain
setTimeout(function(){
    console.log("Task 1");
    setTimeout(function(){
        console.log("Task 2");
    }, 1000);
}, 1000);
```

Readable for 2 levels. Breaks down at 4-5+ levels — hard to read, debug, and maintain. **Promises solve this.**

---

## Promises

Object representing eventual completion or failure of an async operation.

States: **Pending → Resolved (fulfilled) / Rejected**

```js
// Basic promise
let promise = new Promise(function(resolve, reject){
    let success = true;
    if(success) resolve("Promise Resolved");
    else reject("Promise Rejected");
});

promise
    .then(function(result){ console.log(result); })   // on resolve
    .catch(function(error){ console.log(error); });   // on reject
```

```js
// Promise with setTimeout (simulating API call)
function getData(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Data Received");
        }, 2000);
    });
}
getData().then(function(data){ console.log(data); });
```

```js
// Promise chaining — .then() returns new promise
let p = new Promise(function(resolve){ resolve(10); });

p.then(function(res){ return res * 2; })
 .then(function(res){ console.log(res); });   // → 20
```

Cleaner than callbacks but chaining gets verbose. **Async/await solves this.**

---

## Async / Await

Syntactic sugar over promises — makes async code look synchronous. Built on promises, not a replacement.

```js
// async function always returns a promise
async function demo(){
    return "Hello";
}
demo().then(function(res){ console.log(res); });   // → Hello

// await — pauses execution inside async function until promise resolves
function getData(){
    return new Promise(function(resolve){
        setTimeout(function(){ resolve("Async Data"); }, 2000);
    });
}

async function show(){
    let data = await getData();   // waits here, doesn't block outside
    console.log(data);            // → Async Data
}
show();

// await on another async function
async function f1(){ return "A"; }

async function f2(){
    let res = await f1();
    console.log(res);   // → A
}
f2();
```

- `async` keyword on function → it always returns a promise.
- `await` only works **inside** an `async` function.
- Code after `await` runs only after that promise resolves — but nothing outside the function blocks.

---

## Evolution Summary

| Approach | Problem it solves | Problem it introduces |
|---|---|---|
| Callbacks | Basic async | Callback hell at scale |
| Promises | Callback hell | Verbose chaining |
| Async/Await | Verbose chaining | None for most cases |

---

## Common Mistakes

- Using `await` outside an `async` function — SyntaxError.
- Thinking `await` blocks the entire program — it only pauses inside the `async` function. Outside code keeps running.
- No `.catch()` on promises / no try-catch in async functions — unhandled rejections, silent failures.
- Confusing `async function` return value — always a promise, even if you return a plain string. Must `.then()` or `await` to get value out.
- Passing `done()` instead of `done` as callback — calls immediately, passes return value instead of the function.