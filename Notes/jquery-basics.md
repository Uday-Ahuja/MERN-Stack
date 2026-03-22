# jQuery — Basics

JavaScript library — simplifies DOM manipulation, events, effects. Function-based (vs JS which is event-based).

---

## Setup

**Online (CDN) — development:**
```html
<script src="https://code.jquery.com/jquery-4.0.0.js"></script>
```

**Offline (downloaded file):**
```html
<script src="./jquery-4.0.0.js"></script>
```

| Mode | Type | Use |
|---|---|---|
| Development | Uncompressed, offline | Readable, debugging |
| Production | Compressed (minified), CDN | Faster load, real projects |

> LTS version in active use: **3.7.1**. Your class used 4.0.0 — fine for learning, avoid in production.

---

## Basic Structure
```js
$(document).ready(function(){
    // code here — runs after full DOM loads
});
```

---

## Selectors

Same logic as CSS:
```js
$("#myid")      // by id
$(".myclass")   // by class
$("p")          // by tag
$("ul li")      // nested — all <li> inside <ul>
```

---

## Hide / Show
```js
$("#hide").click(function(){
    $("h1").hide();
});

$("#show").click(function(){
    $("h1").show();
});
```

---

## Fade Effects
```js
$("#div1").fadeIn();
$("#div2").fadeOut("slow");     // "slow", "fast", or ms value
$("#div3").fadeToggle(5000);    // toggles between in/out
```

---

## Slide Effects
```js
$("#div").slideDown();
$("#div").slideDown(5000);   // duration in ms
$("#div").slideUp();
$("#div").stop();            // stops current animation mid-way
```

---

## Mouse Events
```js
// mouseenter / mouseleave
$("#p").mouseenter(function(){
    alert("Mouse Enter");
});
$("#p").mouseleave(function(){
    alert("Bye");
});

// mousedown / mouseup
$("#p").mousedown(function(){
    $("#p").css("color", "red");
});
$("#p").mouseup(function(){
    $("#p").css("color", "green");
});
```

---

## Input Events

**Focus / Blur:**
```js
$("input").focus(function(){
    $(this).css({
        "background-color": "yellow",
        "border": "2px solid green"
    });
});

$("input").blur(function(){
    $(this).css("background-color", "white");
});
```

**Keyup — live display:**
```js
$("#name").keyup(function(){
    var val = $(this).val();
    $("#displayarea").text(val);
});
```

> `.val()` gets input value. `.text()` sets plain text content. `.html()` sets innerHTML.

---

## Animation
```js
$("button").click(function(){
    $("div").animate({
        "width": "300px",
        "height": "400px",
        "opacity": 0.4
    }, 4000);   // duration in ms
});
```

Only numeric CSS properties animate — `color` won't work without a plugin.

---

## Chaining

jQuery methods can be chained — each returns the same element.
```js
$("#div").slideDown(500).fadeOut(1000).slideUp(500);
// slideDown → then fadeOut → then slideUp
```

---

## `.css()` — Get & Set
```js
$("#div").css("color", "red");                          // set one
$("#div").css({"color":"red", "font-size":"20px"});     // set multiple
var col = $("#div").css("color");                        // get
```

---

## Quick Reference

| Method | Does |
|---|---|
| `.hide()` / `.show()` | Hide/show element |
| `.fadeIn()` / `.fadeOut()` | Fade transitions |
| `.fadeToggle()` | Toggle fade state |
| `.slideDown()` / `.slideUp()` | Slide transitions |
| `.stop()` | Stop current animation |
| `.animate({})` | Custom property animation |
| `.css()` | Get/set CSS |
| `.val()` | Get/set input value |
| `.text()` | Get/set plain text |
| `.html()` | Get/set innerHTML |
| `.click()` | Bind click event |
| `.keyup()` | Bind keyup event |
| `.focus()` / `.blur()` | Bind focus/blur events |

---

## Common Mistakes

- Forgetting `$(document).ready()` — code runs before DOM loads, elements not found.
- Using `$(this)` outside a jQuery callback — `this` context won't be the element.
- `.animate()` on non-numeric properties (like `color`) — silently does nothing.
- Chaining after `.stop()` without checking — animation queue may behave unexpectedly.
- Loading jQuery after your script — library not available when script runs.