# JavaScript — ES6 OOP

---

## ES6 vs ES5

| | ES5 (≤2014) | ES6 (2015+) |
|---|---|---|
| OOP style | Object-based | Class-based |
| Classes | No native class | `class` keyword |
| Scope | `var` only | `let`, `const` |
| Functions | Regular only | Arrow functions |
| Latest | — | ES15 (2024) |

ES6 code needs **transpilation** to run on older browsers:
- **Babel** — transpiler (ES6 → ES5)
- **Webpack** — bundler

---

## Class Syntax

```js
class Demo{
    show(){
        console.log("Hello");
    }
}

let obj = new Demo();
obj.show();
```

- `class` keyword defines a class.
- Methods defined directly inside — no `function` keyword.
- `new` creates an instance.

---

## Constructor

Member method auto-invoked on object creation. Always named `constructor()`.

**Default constructor** — no params, sets fixed values:
```js
class Demo{
    constructor(){
        this.a = 10;
    }
    display(){ console.log(this.a); }
}
let obj = new Demo();
obj.display();   // → 10
```

**Parameterized constructor** — values passed at object creation:
```js
class Demo{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    sum(){ console.log(this.a + this.b); }
}
let obj = new Demo(10, 20);
obj.sum();   // → 30
```

- `this` refers to the current object instance.
- No explicit call needed — fires automatically on `new`.

---

## Inheritance

Child class inherits properties and methods of parent class. Uses `extends`.

```js
// Single — B inherits A
class A{
    show(){ console.log("Class A"); }
}
class B extends A{}

let obj = new B();
obj.show();   // → Class A (inherited)
```

```js
// Child adds its own method
class A{
    show(){ console.log("A"); }
}
class B extends A{
    display(){ console.log("B"); }
}
let obj = new B();
obj.show();      // → A
obj.display();   // → B
```

**Types:**

| Type | Structure | JS Support |
|---|---|---|
| Single | A → B | ✅ |
| Multilevel | A → B → C | ✅ |
| Hierarchical | A → B, A → C | ✅ |
| Multiple | B extends A, C | ❌ Not supported |
| Hybrid | Mix of above | ❌ Not supported |

---

## Polymorphism

One entity, multiple forms.

**Overriding** — child redefines parent method:
```js
class A{
    show(){ console.log("Parent class"); }
}
class B extends A{
    show(){ console.log("Child class"); }
}
let obj = new B();
obj.show();   // → Child class (child version runs)
```

**Overloading** — same method, different number of args. JS doesn't support true overloading, achieved via rest params or conditional checks:

```js
// Method 1 — rest params (cleaner)
class Demo{
    add(...args){
        let sum = 0;
        for(let i of args) sum += i;
        console.log(sum);
    }
}
let obj = new Demo();
obj.add(1,2);       // → 3
obj.add(1,2,3);     // → 6
obj.add(1,2,3,4);   // → 10

// Method 2 — conditional checks
class Demo{
    add(a, b, c){
        if(a && b && c) console.log(a+b+c);
        else if(a && b) console.log(a+b);
        else console.log(a);
    }
}
```

---

## Abstraction

Hiding implementation, exposing only what's needed. In JS: `#` prefix makes a property/method **private**.

```js
// No abstraction — everything public
class Demo{
    a = 10;
    show(){ console.log(this.a); }
}

// With abstraction — private field + private method
class Demo{
    #a = 10;          // private — inaccessible outside class

    #show(){          // private method
        console.log(this.#a);
    }

    access(){         // public method — controlled entry point
        this.#show();
    }
}

let obj = new Demo();
obj.access();    // → 10
obj.#a;          // ❌ SyntaxError — private
obj.#show();     // ❌ SyntaxError — private
```

| Convention | Access |
|---|---|
| `propertyName` | Public |
| `#propertyName` | Private |

---

## Encapsulation

Wrapping data (properties) and methods together in a class. Object = unit of encapsulation.

```js
// Basic — data + method together
class Demo{
    constructor(){ this.a = 10; }
    show(){ console.log(this.a); }
}

// With getter/setter — controlled access to data
class Demo{
    constructor(a){ this.a = a; }

    getValue(){ return this.a; }
    setValue(val){ this.a = val; }
}

let obj = new Demo(10);
obj.setValue(20);
console.log(obj.getValue());   // → 20
```

> Encapsulation = bundling. Abstraction = hiding. Related but different — encapsulation is the mechanism, abstraction is the goal.

---

## Common Mistakes

- Forgetting `this.` inside class methods — refers to local scope, not the object.
- `#private` field accessed outside class — SyntaxError, not just undefined.
- Overriding without `extends` — just two separate classes, not polymorphism.
- JS doesn't support multiple inheritance — `class B extends A, C` is invalid syntax.
- Missing `new` keyword — calling `Demo()` without `new` returns `undefined`, `this` is wrong.