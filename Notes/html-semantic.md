# HTML — Semantic Tags

Semantic tag = tag name describes its purpose. A `<div>` means nothing — a `<header>` tells browser, developer, and screen reader exactly what that block is.

---

## Semantic Tags Overview

| Tag | Purpose |
|---|---|
| `<header>` | Top section — logo, site title, navigation |
| `<nav>` | Navigation links block |
| `<main>` | Primary content of the page — only one per page |
| `<section>` | Thematic grouping of content within a page |
| `<article>` | Self-contained content — blog post, review, news item |
| `<aside>` | Secondary content — sidebar, related links, ads |
| `<footer>` | Bottom section — copyright, social links, contact info |

---

## Basic Page Structure
```html
<header>
  <h1>PageTurner</h1>
  <nav> ... </nav>
</header>

<main>
  <section>
    <article> ... </article>
    <article> ... </article>
  </section>
  <aside>Related links</aside>
</main>

<footer>
  <p>© 2024 PageTurner</p>
</footer>
```

> `<section>` groups related content. `<article>` is for standalone content that makes sense on its own (e.g. one book review). An `<article>` can contain `<section>`s and vice versa.

---

## `<nav>` — Horizontal Navbar with Dropdown

Built using nested `<ul>` inside `<nav>` (or a wrapper `<div>`). Dropdown shown/hidden via CSS `display` + `:hover`.

**HTML:**
```html
<div id="nav">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li class="genres"><a href="genres.html">Genres</a>
      <ul class="dropdown-menu">
        <li><a href="#">Fiction</a></li>
        <li><a href="#">Non-Fiction</a></li>
        <li><a href="#">Fantasy</a></li>
        <li><a href="#">Mystery/Thriller</a></li>
        <li><a href="#">Romance</a></li>
        <li><a href="#">Sci-Fi</a></li>
      </ul>
    </li>
    <li><a href="reviews.html">Reviews</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</div>
```

**CSS:**
```css
/* Horizontal navbar using flexbox */
#nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

#nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-style: italic;
  font-weight: lighter;
}

#nav ul li a:hover {
  color: #FFF520;
}

/* Anchor for dropdown positioning */
#nav > ul > li {
  position: relative;
}

/* Dropdown — hidden by default */
.dropdown-menu {
  display: none !important;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #3A7D44;
  list-style: none;
  padding: 10px 0;
  min-width: 200px;
  flex-direction: column;
}

.dropdown-menu li {
  padding: 5px 20px;
  display: block;
}

/* Show on hover */
#nav ul li:hover > .dropdown-menu {
  display: block !important;
}
```

**How it works:**
- Outer `<ul>` uses `display: flex` → horizontal navbar.
- Parent `<li>` gets `position: relative` → dropdown positions itself relative to it.
- Dropdown `<ul>` is `position: absolute`, `top: 100%` → sits just below parent item.
- Hidden with `display: none`, revealed on `:hover` via `display: block`.
- `!important` used to override flex display leaking into dropdown — works but ideally restructure to avoid needing it.

---

## Vertical Dropdown (Sidebar Nav)

Same concept, remove `flex` from outer `<ul>`:
```css
#nav ul {
  list-style: none;
  display: block;   /* stacks vertically instead of flex row */
  padding: 10px;
}

.dropdown-menu {
  display: none;
  position: static;   /* flows in document instead of floating */
  padding-left: 20px;
}

#nav ul li:hover > .dropdown-menu {
  display: block;
}
```

> `position: static` for vertical — dropdown indents under parent instead of floating over page content.

---

## Common Mistakes

- Using `<div>` for everything instead of semantic tags — works but bad for SEO and accessibility.
- Multiple `<main>` tags on one page — invalid, only one allowed.
- `position: absolute` on dropdown without `position: relative` on parent — dropdown positions relative to the nearest positioned ancestor, jumps to wrong place.
- Forgetting `list-style: none` on nested `<ul>` — bullet points appear inside dropdown.
- `display: flex` on parent leaking into nested `<ul>` — why `!important` was needed above. Cleaner fix: scope flex only to `#nav > ul`.