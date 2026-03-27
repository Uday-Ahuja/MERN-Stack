# JavaScript — JSON & Nested Objects

---

## JSON

**JavaScript Object Notation** — string-formatted representation of a JS object.

- Lightweight: easy to transmit, process, and manage large data.
- Standard format for data exchange: web↔web, web↔mobile, APIs.
- Supported by almost every real-world technology (Python, Java, PHP, etc.).

---

## JS Object vs JSON String
```js
var StudentDetail = { "name": "Jarvis", "rno": 1001, "per": 89.53 };

document.write(StudentDetail);          // → [object Object]
document.write(typeof StudentDetail);   // → object
```
```js
// JS Object → JSON string
var stdDetail = JSON.stringify(StudentDetail);
document.write(stdDetail);              // → {"name":"Jarvis","rno":1001,"per":89.53}
document.write(typeof stdDetail);       // → string

// JSON string → JS Object
stdDetail = JSON.parse(stdDetail);
document.write(stdDetail);              // → [object Object]
document.write(typeof stdDetail);       // → object
```

| Method | Converts | Result type |
|---|---|---|
| `JSON.stringify(obj)` | JS object → JSON | `string` |
| `JSON.parse(json)` | JSON string → JS object | `object` |

> Why stringify? To transmit data over network (APIs, fetch) — data travels as string, converted back to object at the other end.

---

## Useful Tools & APIs

| Resource | Use |
|---|---|
| https://jsonviewer.stack.hu/ | Visualize/format raw JSON |
| https://jsonplaceholder.typicode.com/ | Free fake REST API for practice |
| https://dummyjson.com/ | Another fake API with richer data |

---

## Nested Object Traversal

Real API data is deeply nested. The class file used JSONPlaceholder's `/users` endpoint — each user has nested `address`, `geo`, and `company` objects.

Structure of each user object:
```
user
├── id, name, username, email, phone, website  ← flat fields
├── address
│   ├── street, suite, city, zipcode           ← flat fields
│   └── geo
│       └── lat, lng                           ← flat fields
└── company
    └── name, catchPhrase, bs                  ← flat fields
```

---

## Traversal Logic

Manually going 3 levels deep using `typeof` check at each level:
```js
users.map((row) => {
    Object.keys(row).map((k1) => {

        if(typeof row[k1] == 'object'){
            // level 2 — nested object (address, company)
            Object.keys(row[k1]).map((k2) => {

                if(typeof row[k1][k2] == 'object'){
                    // level 3 — nested inside nested (geo)
                    Object.keys(row[k1][k2]).map((k3) => {
                        document.write(k3 + "------> " + row[k1][k2][k3] + "<br>");
                    });
                }
                else{
                    document.write(k2 + "-------> " + row[k1][k2] + "<br>");
                }
            });
        }
        else{
            // level 1 — flat field (id, name, email etc)
            document.write(k1 + "------> " + row[k1] + "<br>");
        }

    });
    document.write("<br>");   // blank line between users
});
```

**How it works step by step:**
1. Outer `map` — loops over each user object in the array.
2. `Object.keys(row)` — gets all top-level keys of a user.
3. `typeof row[k1] == 'object'` — checks if value is nested object (address/company) or flat (name/email).
4. If nested → go one level deeper, repeat check for `geo` inside `address`.
5. If flat at any level → print directly.

---

## typeof Check Pattern

Key pattern used throughout:
```js
if(typeof row[k1] == 'object'){
    // drill deeper
} else {
    // print directly
}
```

`typeof` returns `'object'` for both arrays and objects — this is how the code detects when to go deeper vs when to print.

---

## Common Mistakes

- `JSON.parse()` on a JS object (not a string) — throws SyntaxError. Only parse actual JSON strings.
- `JSON.stringify()` then printing — looks like an object but is a string. `typeof` confirms it.
- Forgetting `typeof arr == 'object'` is true — arrays also pass the nested check. Fine here since none of the nested values are arrays, but watch out in other data.
- Hardcoding depth levels — this approach breaks if nesting goes 4+ levels. Real projects use recursive functions instead.