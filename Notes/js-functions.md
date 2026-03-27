# JavaScript — Function Types

Functions = reusable blocks of code, executed when called.
JS is fully object-oriented — functions are also objects (stored as references).

---

## Classification: By Args & Return Value

Same 4 types as covered before — applies to ALL function types below:

| Type | Args | Return |
|---|---|---|
| 1 | No | No |
| 2 | Yes | No |
| 3 | No | Yes |
| 4 | Yes | Yes |

---

## 1. Default Function

Standard named function. Defined with `function` keyword.
```js
// Type 1 — no args, no return
function add(){
    var a=10, b=20;
    document.write("Sum = " + (a+b));
}
add();

// Type 4 — args + return
function add(a, b){
    return a + b;
}
var a=10, b=20;
document.write("Sum = " + add(a,b));
```

- Defined once, called anywhere — even before definition (hoisting).
- Most common, most readable.

---

## 2. Variable (Anonymous) Function

Function stored in a variable. No name on the function itself.
```js
// Type 3 — no args, with return
var fact = function(){
    var n=5, f=1;
    for(var i=1; i<=n; i++) f *= i;
    return f;
}
document.write("Factorial = " + fact());

// Type 4 — args + return
var fact = function(n){
    var f=1;
    for(var i=1; i<=n; i++) f *= i;
    return f;
}
document.write("Factorial = " + fact(5));
```

- Called using the variable name: `fact()` not `function()`.
- **Not hoisted** — must be defined before calling, unlike default functions.

---

## 3. Arrow (Expression) Function

Shorter syntax using `=>`. Introduced in ES6.
```js
// Type 2 — args, no return (prints multiplication table)
var table = (n) => {
    for(var i=1; i<=10; i++){
        document.write(n + "*" + i + "=" + (n*i) + "<br>");
    }
}
table(7);

// Type 4 — args + return (returns table as array)
var table = (n) => {
    var ar = [];
    for(var i=1; i<=10; i++){
        ar.push(n*i);
    }
    return ar;
}
var res = table(7);
document.write(res);
```

- Same as variable function, just cleaner syntax.
- `(args) => { }` replaces `function(args){ }`.
- Single-expression functions can drop `{}` and `return`: `var double = n => n*2;`

---

## 4. Fat Arrow / Lambda (IIFE)

**Immediately Invoked Function Expression** — executes the moment it is defined. No explicit call needed.
```js
((n) => {
    for(var i=1; i<=10; i++){
        document.write(n + "*" + i + "=" + (n*i) + "<br>");
    }
})(7);
```

Key points:
- Runs where it is written — no separate call.
- Auto-invoked — `()` at the end is what triggers it, argument goes inside that.
- **Cannot return a value** to outside (nothing to receive it).
- Used to pass functions as arguments (callbacks).

---

## 5. Callback Function

A function passed as an argument to another function.
```js
function greet(name, callback){
    document.write("Hello " + name);
    callback();
}

function done(){
    document.write(" — Done.");
}

greet("Uday", done);   // done is passed as argument, not called here
```

- Common in event handling and async JS.
- Arrow functions are often used as inline callbacks.

---

## 6. Prototype Function

Function added to an object's prototype — shared across all instances of that object type. Covered later with OOP/classes.

---

## Syntax Comparison

| Type | Definition | Call |
|---|---|---|
| Default | `function name(args){ }` | `name(args)` |
| Variable | `var name = function(args){ }` | `name(args)` |
| Arrow | `var name = (args) => { }` | `name(args)` |
| Lambda/IIFE | `((args)=>{ })(args)` | None — auto-runs |
| Callback | Passed as argument | Called inside receiver |

---

## Hoisting
```js
// Default function — works even before definition
hello();
function hello(){ document.write("Hi"); }   // ✅ hoisted

// Variable/Arrow — does NOT work before definition
hello();
var hello = function(){ document.write("Hi"); }  // ❌ TypeError
```

Default functions are hoisted (moved to top by JS engine). Variable and arrow functions are not.

---

## Common Mistakes

- Calling variable/arrow function before defining it — `TypeError: hello is not a function`.
- Adding `()` when passing a callback — `greet(done)` is correct, `greet(done())` calls it immediately and passes the return value instead.
- Expecting IIFE to return a value to outside scope — it can't, nothing receives it.
- Arrow functions and `this` — arrow functions don't have their own `this`, behaves differently in OOP context. Matters when you hit prototype/class functions.