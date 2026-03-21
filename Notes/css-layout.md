# CSS — Layout

---

## Box Model

Every HTML element is a box with 4 layers:
```
[ margin ]
  [ border ]
    [ padding ]
      [ content ]
```
```css
div {
  width: 200px;        /* content width */
  padding: 10px;       /* space between content and border */
  border: 2px solid;   /* border around padding */
  margin: 20px;        /* space outside border, pushes other elements away */
}
```

> By default, `width` = content only. Actual rendered width = content + padding + border. Use `box-sizing: border-box` to make `width` include padding and border — avoids sizing surprises.
```css
* { box-sizing: border-box; }
```

---

## Display Property
```css
display: block;    /* full width, new line — div, p, h1 */
display: inline;   /* sits in text flow, no width/height control — span, a */
display: inline-block; /* inline flow but accepts width/height */
display: none;     /* removes element from page entirely */
display: flex;     /* flexbox layout on container */
```

---

## Flexbox

Apply `display: flex` to container — children become flex items.
```css
.container {
  display: flex;
  justify-content: space-around;  /* horizontal spacing */
  align-items: center;            /* vertical alignment */
  flex-direction: row;            /* row (default) or column */
  gap: 20px;                      /* space between items */
}
```

**`justify-content` values:**

| Value | Does |
|---|---|
| `flex-start` | Items packed to start (default) |
| `flex-end` | Items packed to end |
| `center` | Items centered |
| `space-between` | Equal space between items, none at edges |
| `space-around` | Equal space around each item |
| `space-evenly` | Equal space between and at edges |

**Vertical separation between two divs:**
```css
.top-div { margin-bottom: 20px; }
/* or on container */
.container { gap: 20px; }
```

---

## Position
```css
position: static;    /* default — normal document flow */
position: relative;  /* offset from its own normal position, stays in flow */
position: absolute;  /* removed from flow, positions relative to nearest positioned ancestor */
position: fixed;     /* removed from flow, stays fixed to viewport (like sticky navbar) */
```
```css
/* dropdown pattern — from your own code */
.parent { position: relative; }
.dropdown {
  position: absolute;
  top: 100%;    /* just below parent */
  left: 0;
}
```

---

## Circular Image
```css
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;     /* makes any element circular if width = height */
  object-fit: cover;      /* crops image to fill box without stretching */
}
```

---

## Overflow
```css
overflow: visible;   /* default — content spills outside box */
overflow: hidden;    /* clips content, also clears floats */
overflow: scroll;    /* always shows scrollbar */
overflow: auto;      /* scrollbar only when needed */
```

> `overflow: hidden` on a container with floated children prevents container height collapse — used in your navbar CSS.

---

## Z-index

Controls stacking order of overlapping elements. Only works on positioned elements (anything except `static`).
```css
.dropdown { z-index: 100; }   /* higher = on top */
.modal { z-index: 999; }
```

---

## CSS Hierarchy (Specificity in Selectors)
```css
div p { }             /* <p> inside any <div> */
.nav ul li a { }      /* <a> inside <li> inside <ul> inside .nav */
.nav > ul { }         /* direct child <ul> of .nav only — not deeper nested */
.nav ul li:first-child { }   /* first <li> only */
.nav ul li:last-child { }    /* last <li> only */
.nav ul li:nth-child(2) { }  /* second <li> only */
```

---

## Common Mistakes

- `position: absolute` without `position: relative` on parent — element jumps to wrong place.
- `width` + `padding` exceeding container — use `box-sizing: border-box` globally.
- Flexbox on wrong element — apply `display: flex` to the **container**, not the items.
- `z-index` not working — element probably has `position: static`. Set `position: relative` minimum.
- `border-radius: 50%` not making circle — `width` and `height` must be equal.