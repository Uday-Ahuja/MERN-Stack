# HTML — Introduction & Basics

---

## What is HTML?

**HyperText Markup Language** — defines the *structure* of a web page using tags. Not a programming language, not a scripting language. It has no logic, no variables, no execution — it's purely declarative markup.

> **Common misconception:** HTML is often grouped with "scripting languages" in course material. Ignore that. Scripting = executable logic (JS, PHP). Markup = structure description (HTML). Different things.

---

## Language Types (Web Context)

| Type | What it does | Examples |
|---|---|---|
| Programming | Logic, computation, OOP | C, C++, Java |
| Scripting | Dynamic behaviour, runs in runtime | JavaScript, PHP |
| Markup | Defines structure/content | HTML, XML |

---

## Web Stack Overview

| Layer | Role | Technologies |
|---|---|---|
| Frontend | What the user sees | HTML, CSS, JS, jQuery |
| Server-side | Request handling, templating | PHP, JSP, ASP |
| Backend | Data storage & logic | SQL, MongoDB, etc. |
| Full Stack | End-to-end, same language family | MERN (JS everywhere) |

**MERN = MongoDB, Express, React, Node.js** — all JS-based, so one language covers frontend + backend.

---

## Tag Types

**Paired tag** — has opening and closing.
```html
<p>paragraph</p>
<h1>heading</h1>
```

**Unpaired (void) tag** — no closing tag, self-contained.
```html
<br>
<img src="photo.jpg">
```

---

## Boilerplate Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <!-- content goes here -->
  </body>
</html>
```

- `<!DOCTYPE html>` — tells browser this is HTML5. Not a tag, a declaration.
- `<head>` — metadata, title, linked CSS/JS. Not visible on page.
- `<body>` — everything the user sees.

---

## Comments

```html
<!-- This is a comment. Browser ignores it. -->
```

Use for: section labels, disabling code temporarily, leaving notes.

---

## Heading Tags

Six levels, `<h1>` to `<h6>`. Bold by default. Size decreases as number increases.

```html
<h1>Largest</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>Smallest</h6>
```

| Tag | Default Size |
|---|---|
| `<h1>` | 36px |
| `<h2>` | 30px |
| `<h3>` | 24px |
| `<h4>` | 18px |
| `<h5>` | 12px |
| `<h6>` | 6px (barely visible) |

> Sizes are browser defaults — overridden easily with CSS. `<h1>` = most important, use once per page (SEO matters).

---

## Paragraph Tag

```html
<p>This is a paragraph.</p>
```

- Adds top + bottom margin by default (browser stylesheet).
- Block-level — starts on a new line.

---

## Division Tag

```html
<div>
  <p>Grouped content</p>
</div>
```

- Generic block-level container. No visual styling by default.
- Used for grouping elements to apply CSS or JS to them together.
- Workhorse of layout — most CSS layouts are built around `<div>`.

---

## Quick Reference

| Tag | Type | Purpose |
|---|---|---|
| `<html>` | Paired | Root element |
| `<head>` | Paired | Metadata container |
| `<title>` | Paired | Browser tab text |
| `<body>` | Paired | Visible page content |
| `<h1>`–`<h6>` | Paired | Headings |
| `<p>` | Paired | Paragraph |
| `<div>` | Paired | Generic block container |
| `<br>` | Unpaired | Line break |
| `<img>` | Unpaired | Image embed |

---

## Common Mistakes

- Using `<h1>` multiple times on one page — bad for SEO and accessibility.
- Treating `<div>` as semantic — it has no meaning. Use `<section>`, `<article>`, `<nav>` when content has a purpose.
- Forgetting `<!DOCTYPE html>` — browser may render in quirks mode.
- Nesting block elements inside inline elements (e.g., `<p>` inside `<span>`) — invalid HTML.