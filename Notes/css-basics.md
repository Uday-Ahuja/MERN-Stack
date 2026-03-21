# CSS — Basics

---

## What is CSS

Cascading Style Sheets — controls visual presentation of HTML. "Cascading" = multiple rules can apply to one element, specificity + order determines which wins.

---

## 3 Ways to Add CSS

| Method | How | When to use |
|---|---|---|
| Inline | `style=""` attribute on tag | Quick one-off overrides |
| Internal | `<style>` tag inside `<head>` | Single page, no external file |
| External | `<link>` to `.css` file | Always — separates structure from style |
```html
<!-- Inline -->
<p style="color: red;">Text</p>

<!-- Internal -->
<head>
  <style>
    p { color: red; }
  </style>
</head>

<!-- External -->
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

---

## Selectors
```css
p { }              /* element — all <p> tags */
.classname { }     /* class — any element with class="classname" */
#idname { }        /* id — one unique element with id="idname" */
* { }              /* universal — every element on page */
```

**Targeting nested elements:**
```css
.mynav ul { }         /* all <ul> inside .mynav */
.mynav ul li a { }    /* all <a> inside <li> inside <ul> inside .mynav */
.mynav ul li a:hover{ } /* hover state on those <a> tags */
```

---

## Classes vs IDs

| | Class | ID |
|---|---|---|
| Syntax | `.classname` | `#idname` |
| Reusable | Yes — multiple elements | No — one per page |
| HTML | `class="classname"` | `id="idname"` |
| Use for | Styling groups | Unique elements, JS targeting |

---

## Universal Reset
```css
* {
  margin: 0;
  padding: 0;
}
```

Browsers apply default margin/padding to elements (`<body>`, `<h1>`, `<p>` etc). This strips all of it so you start from scratch. Almost every real project starts with this.

---

## Common Properties
```css
p {
  color: red;                  /* text colour */
  background-color: #f0f0f0;  /* background */
  font-size: 16px;             /* text size */
  font-weight: bold;           /* thickness */
  font-style: italic;          /* style */
  text-decoration: none;       /* underline, overline, line-through */
  text-align: center;          /* left, right, center, justify */
  padding: 10px;               /* space inside element */
  margin: 10px;                /* space outside element */
  border: 1px solid black;     /* width style colour */
  opacity: 0.5;                /* 0 = invisible, 1 = fully visible */
}
```

---

## CSS Units

| Unit | Type | Notes |
|---|---|---|
| `px` | Fixed | Absolute pixels |
| `%` | Relative | Relative to parent element |
| `em` | Relative | Relative to current element's font-size |
| `rem` | Relative | Relative to root (`<html>`) font-size |
| `vh` | Relative | % of viewport height |
| `vw` | Relative | % of viewport width |

---

## Specificity (Cascade Order)

When multiple rules target same element, this order wins:
```
Inline > ID > Class > Element > Universal
```
```css
* { color: black; }       /* lowest priority */
p { color: blue; }
.text { color: green; }
#main { color: red; }     /* beats all above */
/* inline style="..." beats all */
```

---

## Navbar from Class Practice
```css
.mynav { background-color: #d5b0b3; }

.mynav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;   /* clears float — without this, .mynav collapses to 0 height */
}

.mynav ul li { float: left; }   /* horizontal layout via float */

.mynav ul li a {
  display: block;               /* makes entire padding area clickable */
  color: black;
  text-decoration: none;
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
}

.mynav ul li a:hover { color: white; }

/* Dropdown */
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #d5b0b3;
  list-style: none;
  padding: 0;
}

.dropdown:hover .dropdown-menu { display: block; }

.dropdown-menu li a {
  display: block;
  color: white;
  padding: 15px 20px;
}
```

> This uses `float: left` for horizontal nav — older method. Your PageTurner used `flexbox` instead. Both work, flex is cleaner.

---

## Common Mistakes

- Forgetting `.` or `#` in selector — `p` targets all `<p>`, `.p` targets class `p`. Very different.
- Using `id` for multiple elements — only first match gets styled, rest ignored.
- Not resetting margin/padding — unexpected spacing from browser defaults.
- `opacity` affects entire element including children — to change only background transparency use `rgba(0,0,0,0.5)` instead.