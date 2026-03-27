# JavaScript — Objects

---

## Declaration
```js
var obj = { key1: value1, key2: value2 };

var obj1 = { "Name": "Jarvis", "rollno": 1001, "per": 89.53 };
```

- Curly braces `{}` = object literal syntax.
- Stores key-value pairs. Keys are strings, values can be any type.
- `typeof obj` → `"object"`
- Integer keys are valid but pointless — just use an array then.

---

## Printing
```js
document.write(obj1);   // → [object Object]
```

Can't print object directly — JS prints type (`object`) and parent class (`Object`). Access properties explicitly.

---

## Access
```js
// dot notation
document.write(obj1.Name);

// bracket notation
document.write(obj1["rollno"]);
```

Manual access is fine for small objects. Bulk data → use loops.

---

## Loop Access

Traditional `for` loop won't work — keys aren't numeric indexes.

**`for-in` — iterates keys:**
```js
for(let k in obj1){
    document.write(k + "-----> " + obj1[k] + "<br>");
}
```

**`for-of` — does not work directly on objects** (objects aren't iterable). Use `for-in` or convert keys first.

**`Object.keys()` + `map`:**
```js
var arr_keys = Object.keys(obj1);   // returns array of keys — note capital 'O', it's the global Object class
arr_keys.map((key) => {
    document.write(key + "-----> " + obj1[key] + "<br>");
});
```

---

## Nested Objects
```js
var obj = {
    name: "Uday",
    address: {
        city: "Pune",
        pin: 411001
    }
};

document.write(obj.address.city);      // → Pune
document.write(obj["address"]["pin"]); // → 411001
```

---

## Array of Objects

Most common real-world structure — like a table where each row is an object.
```js
var studentdetail = [
    { "Name": "Jarvis", "rollno": 1001, "per": 89.53 },
    { "Name": "Tony",   "rollno": 1002, "per": 79.53 },
    { "Name": "Rock",   "rollno": 1003, "per": 69.53 }
];

typeof studentdetail   // → "object" (arrays are objects)
```

**`for-of` on array only — prints `[object Object]`:**
```js
for(let row of studentdetail){
    document.write(row + "<br>");    // → [object Object] — same problem as before
}
```

**`for-of` outer + `for-in` inner — correct:**
```js
for(let row of studentdetail){
    for(let k in row){
        document.write(k + "-----> " + row[k] + "<br>");
    }
    document.write("<br>");
}
```

**`map` + `Object.keys()` — same result, functional style:**
```js
studentdetail.map((row) => {
    Object.keys(row).map((k) => {
        document.write(k + "-----> " + row[k] + "<br>");
    });
    document.write("<br>");
});
```

---

## Quick Reference

| Task | Method |
|---|---|
| Get all keys | `Object.keys(obj)` |
| Iterate keys | `for(let k in obj)` |
| Iterate array of objects | `for-of` outer + `for-in` inner |
| Access nested | `obj.key1.key2` |
| Direct print | ❌ returns `[object Object]` |

---

## Common Mistakes

- `for-of` directly on object — TypeError, objects aren't iterable. Use `for-in` or `Object.keys()`.
- `document.write(obj)` expecting readable output — always gives `[object Object]`.
- `Object.keys()` — capital `O` is mandatory, it's the global built-in class not a variable.
- Using same variable name for key in nested loops (`k` vs `k1`) — causes wrong output, keep them distinct.
- Array of objects: outer `for-of` gives each row as object — still need inner loop to read its properties.