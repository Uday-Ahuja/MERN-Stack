# JavaScript — Core Concepts

---

## Datatypes

Dynamically typed — no explicit type declaration needed.

**Primitive:**
```js
var n = 10;          // number
var s = "hello";     // string
var b = true;        // boolean
var u;               // undefined — declared but no value assigned
```

**Non-Primitive:**
```js
var arr = [1,2,3];           // array
var obj = {name:"Uday"};     // object
function demo(){ }           // function
```
```js
typeof 10;          // "number"
typeof "hi";        // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof [];          // "object" — arrays are objects in JS
typeof {};          // "object"
```

---

## Typecasting
```js
parseInt("3.7")       // → 3       (float/string → int)
parseFloat("3.7")     // → 3.7     (string → float)
(10).toString()       // → "10"    (number → string)
```

---

## ASCII Conversion
```js
// char → ASCII
var ch = "Any";
ch.charCodeAt(2);         // → ASCII of 'y'

// ASCII → char
String.fromCharCode(67);  // → "C"
```

---

## Operators

**Arithmetic:** `+  -  *  /  %`

**Assignment:** `=`

**Arithmetic Assignment:** `+=  -=  *=  /=  %=`

**Comparison:**

| Operator | Does |
|---|---|
| `==` | Equal (type coercion — `"5"==5` is true) |
| `===` | Strict equal (type + value — `"5"===5` is false) |
| `!=` | Not equal |
| `>  <  >=  <=` | Comparison |

**Logical:** `&&  \|\|  !`

**Increment/Decrement:** `++  --`

**Ternary:**
```js
var result = (age >= 18) ? "Adult" : "Minor";
```

**Bitwise:**
```js
var a=10, b=12;
document.write(a & b);    // AND
document.write(a | b);    // OR
document.write(a ^ b);    // XOR
document.write(~a);       // NOT
document.write(a << 2);   // Left shift
document.write(a >> 2);   // Right shift
```

---

## Conditionals
```js
// if
if(condition){ }

// if-else
if(condition){ } else { }

// else-if ladder
if(cond1){ }
else if(cond2){ }
else if(cond3){ }
else{ }

// switch
switch(choice){
    case 1: statements; break;
    case 2: statements; break;
    default: statements;
}
```

> Missing `break` in switch — falls through to next case. Usually a bug.

---

## Loops
```js
// for
for(var i=0; i<5; i++){ }

// while
var i=0;
while(i<5){ i++; }

// do-while — runs at least once
var i=0;
do{ i++; }while(i<5);

// for-in — iterates keys/indexes
for(var key in obj){ }

// for-of — iterates values
for(var val of arr){ }
```

---

## User Input
```js
var a = parseInt(prompt("Enter value"));
```

---

## Programs
```js
// Armstrong Number
var n=1632, sum=0, temp=n;
var len = n.toString().length;
while(n>0){
    var rem = n%10;
    sum += Math.pow(rem, len);
    n = parseInt(n/10);
}
document.write(sum==temp ? "Armstrong" : "Not Armstrong");

// Strong Number (sum of digit factorials == number)
var n=145, sum=0, temp=n;
while(n>0){
    var rem=n%10, f=1;
    for(var i=1; i<=rem; i++) f *= i;
    sum += f;
    n = parseInt(n/10);
}
document.write(sum==temp ? "Strong" : "Not Strong");

// Duck Number (has 0 but not as first digit)
var n=1302, haszero=false, temp=n;
while(n>0){
    if(n%10==0) haszero=true;
    n = parseInt(n/10);
}
var first=temp;
while(first>=10) first = Math.floor(first/10);

if(first==0) document.write("Not Duck");
else if(haszero) document.write("Duck");
else document.write("Not Duck");
```

---

## Arrays
```js
// Declaration
var arr = [1, 2, 3, 4, 5];
var arr = new Array(1, 2, 3);
var mixed = [101, 'abc', 98.21];   // JS arrays are heterogeneous
```
```js
// Access
arr[0];          // manual
arr.length;      // 5

// Loop methods
for(var i=0; i<arr.length; i++)   document.write(arr[i]);
for(var i in arr)                  document.write(i+"→"+arr[i]);   // i = index
for(var i of arr)                  document.write(i);               // i = value

// map — index + value
arr.map((val, ind) => {
    document.write(ind+"→"+val);
});
```
```js
// Array sum
var sum=0;
for(var i of arr) sum += i;
document.write("Sum = "+sum);
```

---

## Objects

Key-value pairs. Access with dot or bracket notation.
```js
var obj = {
    name: "Uday",
    age: 20,
    lang: "JavaScript"
};

document.write(obj.name);        // dot notation
document.write(obj["age"]);      // bracket notation

// iterate
for(var key in obj){
    document.write(key + " : " + obj[key]);
}
```

---

## Array vs Object

| | Array | Object |
|---|---|---|
| Access | Index (`arr[0]`) | Key (`obj.name`) |
| Order | Ordered | Unordered |
| Use | List of items | Structured data |
| typeof | `"object"` | `"object"` |

---

## Common Mistakes

- `==` vs `===` — always use `===` unless you explicitly need coercion.
- `typeof []` returns `"object"` not `"array"` — use `Array.isArray(arr)` to check.
- `for-in` on arrays gives indexes as strings — use `for-of` or standard `for` for arrays.
- `parseInt()` on division result — JS division always returns float, truncate explicitly.
- Forgetting `break` in switch — silent fallthrough bug.