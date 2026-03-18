# HTML — Tables

---

## Basic Structure
```html
<table>
  <tr>
    <th>Name</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>React</td>
    <td>JavaScript</td>
  </tr>
</table>
```

- `<table>` — container
- `<tr>` — table row
- `<th>` — header cell (bold + centered by default)
- `<td>` — data cell

---

## Table Attributes

| Attribute | On | Does |
|---|---|---|
| `border` | `<table>` | Border thickness in px |
| `cellspacing` | `<table>` | Gap *between* cells (outer) |
| `cellpadding` | `<table>` | Gap *inside* cells, between content and border (inner) |
| `bgcolor` | `<table>` / `<tr>` / `<td>` | Background color |
| `align` | `<table>` / `<td>` / `<th>` | Horizontal alignment: `left`, `center`, `right` |
```html
<table border="1" cellspacing="5" cellpadding="10" bgcolor="#f0f0f0" align="center">
```

> All these attributes are deprecated in HTML5 — CSS handles them now. Still works, still taught. CSS equivalents: `border`, `border-spacing`, `padding`, `background-color`, `margin: auto`.

---

## Centering a Table

**With `align`:**
```html
<table align="center">
```

**With `<center>` tag** (older method, deprecated):
```html
<center>
  <table> ... </table>
</center>
```

**CSS way (correct):**
```css
table { margin: auto; }
```

---

## Spanning

**`colspan`** — cell stretches across multiple *columns*:
```html
<tr>
  <td colspan="2">Spans 2 columns</td>
</tr>
```

**`rowspan`** — cell stretches across multiple *rows*:
```html
<tr>
  <td rowspan="2">Spans 2 rows</td>
  <td>Row 1</td>
</tr>
<tr>
  <td>Row 2</td>   <!-- only 1 td here because rowspan above occupies the first column -->
</tr>
```

---

## Full Example
```html
<center>
<table border="1" cellspacing="4" cellpadding="8">
  <tr bgcolor="#cccccc">
    <th>Stack</th>
    <th>Frontend</th>
    <th>Backend</th>
  </tr>
  <tr>
    <td rowspan="2">Web</td>
    <td>React</td>
    <td>Node.js</td>
  </tr>
  <tr>
    <td>Angular</td>
    <td>Java</td>
  </tr>
  <tr>
    <td colspan="3" align="center">All are in-demand</td>
  </tr>
</table>
</center>
```

---

## Common Mistakes

- Miscounting `<td>` after using `rowspan`/`colspan` — if a cell spans 2 columns, the next row needs one fewer `<td>`.
- `cellspacing` vs `cellpadding` confusion — spacing is *outside* (between cells), padding is *inside* (content to border).
- Using `<center>` tag — valid for quick practice, deprecated in production.