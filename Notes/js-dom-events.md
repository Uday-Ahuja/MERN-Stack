# JavaScript — DOM & Events

DOM (Document Object Model) — browser's representation of the HTML page as objects JS can access and modify.

---

## DOM Selectors
```js
document.getElementById("myid")         // single element by id
document.getElementsByTagName("img")[0] // all elements of tag, index for specific one
document.getElementsByClassName("cls")  // all elements of class
```

---

## DOM Manipulation
```js
element.innerHTML = "New content";       // change inner HTML
element.style.backgroundColor = "red";  // change CSS property
element.src = "newimage.jpg";            // change attribute
element.height += 20;                    // modify numeric attribute
```

---

## Events Reference

| Event | Trigger |
|---|---|
| `onclick` | Single click |
| `ondblclick` | Double click |
| `onkeyup` | Key released |
| `onfocus` | Input gains focus |
| `onblur` | Input loses focus |
| `onchange` | Dropdown/input value changes |
| `onsubmit` | Form submitted |
| `onmouseenter` | Mouse enters element |
| `onmouseleave` | Mouse leaves element |
| `onmousedown` | Mouse button pressed |
| `onmouseup` | Mouse button released |

---

## Click Event
```js
function show(){
    document.getElementById("myh1").innerHTML = Date();
}
```
```html
<button onclick="show()">Click</button>
<button ondblclick="show()">Double Click</button>
```

---

## Image Zoom
```js
function zoomIn(){
    var img = document.getElementsByTagName("img")[0];
    img.height += 20;
    img.width += 20;
}
function zoomOut(){
    var img = document.getElementsByTagName("img")[0];
    img.height -= 20;
    img.width -= 20;
}
```

---

## Mouse Events — Image Swap
```js
function chngImg(src){
    document.getElementById("myimg").src = src;
}
function chngImg1(){
    document.getElementById("myimg").src = "default.jpg";
}
```
```html
<img id="myimg" src="default.jpg"
  onmouseenter="chngImg('hover.jpg')"
  onmouseleave="chngImg1()">
```

---

## Background Color Change
```js
function chngColor(){
    document.body.style.backgroundColor = "yellow";
}
function chngColor1(){
    document.body.style.backgroundColor = "white";
}
```

---

## Keyup — Auto Sum

Recalculates on every keystroke. `*1` converts string input to number.
```js
function f1(){
    var a = document.getElementById("txta").value;
    var b = document.getElementById("txtb").value;
    var c = document.getElementById("txtc").value;
    document.getElementById("res").innerHTML = a*1 + b*1 + c*1;
}
```
```html
<input id="txta" onkeyup="f1()">
<input id="txtb" onkeyup="f1()">
<input id="txtc" onkeyup="f1()">
<p id="res"></p>
```

---

## Focus / Blur
```js
function f1(e){
    e.style.backgroundColor = "yellow";
}
function f2(e){
    if(e.value == ""){
        e.style.backgroundColor = "white";
        alert("Please enter a value");
    }
}
```
```html
<input onfocus="f1(this)" onblur="f2(this)">
```

> `this` passes the element itself — no need to query DOM separately.

---

## Change Event — Dropdown
```js
function f1(val){
    alert("You selected: " + val);
}
```
```html
<select onchange="f1(this.value)">
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
</select>
```

---

## Form Submit
```js
function formSubmit(){
    alert("Form submitted");
    return false;   // prevents actual page reload/redirect
}
```
```html
<form onsubmit="return formSubmit()">
```

---

## Form Validation Structure

**Single function** — one function validates all fields, triggered via `onkeyup`/`onclick`.

**Separate functions** — one per field, cleaner for large forms:
```js
checkName();
checkEmail();
checkPass();
checkMob();
```

Each checks its field and shows/hides error message independently.

---

## Common Mistakes

- `.value` returns string — always convert before arithmetic (`*1`, `parseInt()`, `parseFloat()`).
- `onsubmit` must use `return functionName()` not just `functionName()` — otherwise `return false` inside does nothing.
- `getElementsByTagName` returns array-like list — need `[0]` for first element.
- Changing `style.backgroundColor` uses camelCase — not `background-color`.