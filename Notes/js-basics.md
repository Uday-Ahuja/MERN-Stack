# JavaScript — Basics

Client-side scripting language — runs in browser, makes pages dynamic via events, validation, animations.

- JavaScript → event-based
- jQuery → function-based (separate library)

---

## Variables

Dynamically typed — no need to declare type.
```js
var name = "Uday";
var age = 20;
var pi = 3.14;
```

---

## Output Methods
```js
alert("Message");           // popup box
console.log("Message");     // browser console
document.write("Message");  // writes directly to page
```

---

## Operators & typeof
```js
typeof variable;   // returns "number", "string", "boolean", "undefined" etc
```

---

## Conditionals
```js
if(n1 > n2 && n1 > n3)
    document.write("N1 is Greater");
else if(n2 > n3)
    document.write("N2 is Greater");
else
    document.write("N3 is Greater");
```

---

## Loops
```js
// for
for(var i = 0; i < 5; i++){
    document.write(i);
}

// while
var i = 0;
while(i < 5){
    document.write(i);
    i++;
}

// do-while — executes at least once
var i = 0;
do{
    document.write(i);
    i++;
}while(i < 5);
```

---

## Functions

Block of code executed when called. 4 types based on args/return:

| Type | Args | Return |
|---|---|---|
| 1 | No | No |
| 2 | Yes | No |
| 3 | No | Yes |
| 4 | Yes | Yes |
```js
// Type 1 — no args, no return
function demo(){
    document.write("Demo function");
}
demo();

// Type 4 — args + return (Perfect Number check)
function check(n){
    var sum = 0;
    for(var i = 1; i < n; i++){
        if(n % i == 0) sum += i;
    }
    return sum == n;
}

if(check(28))
    document.write("Perfect Number");
else
    document.write("Not Perfect");
```

---

## ASCII Reference

| Char | Value |
|---|---|
| A–Z | 65–90 |
| a–z | 97–122 |
| Space | 32 |
| Upper → Lower | +32 |
| Lower → Upper | -32 |

---

## Practice Programs
```js
// Simple Interest
var p=10000, r=3.6, t=2;
document.write("SI = " + (p*r*t)/100);

// Reverse 3-digit number
var n=765;
var d1 = n%10, d2 = parseInt(n/10)%10, d3 = parseInt(n/100);
document.write("Reverse = " + (d1*100 + d2*10 + d3));

// Triangle type
var s1=12, s2=11, s3=12;
if(s1==s2 && s2==s3) document.write("Equilateral");
else if(s1==s2 || s2==s3 || s1==s3) document.write("Isosceles");
else document.write("Scalene");

// Student grade
var marks = [18,57,22,8,4];
var per = marks.reduce((a,b)=>a+b,0) / 5;
if(per>=90) document.write("A+");
else if(per>=80) document.write("A");
else if(per>=70) document.write("B+");
else if(per>=60) document.write("B");
else if(per>=50) document.write("C+");
else if(per>=45) document.write("C");
else if(per>=33) document.write("D");
else document.write("FAIL");
```

---

## Common Mistakes

- `var` is function-scoped, not block-scoped — use `let`/`const` in real projects.
- `parseInt()` needed for division digits — JS division returns float by default.
- `==` does type coercion (`"5" == 5` is true). Use `===` for strict comparison.