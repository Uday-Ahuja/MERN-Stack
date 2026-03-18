# HTML — Text Formatting Tags

---

## Inline Formatting Tags

These are inline elements — they don't start a new line. Multiple can sit on the same line.
```html
<b>bold</b> <i>italic</i> <u>underline</u> <mark>highlight</mark>
```

| Tag | Renders As | Semantic Meaning |
|---|---|---|
| `<b>` | **bold** | None — purely visual |
| `<strong>` | **bold** | Important content (screen readers stress it) |
| `<i>` | *italic* | None — purely visual |
| `<em>` | *italic* | Emphasized content (screen readers stress it) |
| `<u>` | underlined | None — avoid, looks like a hyperlink |
| `<mark>` | highlighted (yellow) | Relevant/highlighted text |
| `<s>` | ~~strikethrough~~ | No longer accurate (cosmetic) |
| `<del>` | ~~strikethrough~~ | Deleted content (semantic — like a document edit) |
| `<ins>` | underlined | Inserted content (semantic — document edit, pairs with `<del>`) |

> `<b>` vs `<strong>` and `<i>` vs `<em>` look identical visually. The difference is semantic — `<strong>` and `<em>` carry meaning for accessibility and SEO. Prefer them.

---

## `<del>` and `<ins>` — Paired Usage

Typically used together to show edits:
```html
Price: <del>₹999</del> <ins>₹799</ins>
```

Renders: Price: ~~₹999~~ <ins>₹799</ins>

---

## Superscript & Subscript
```html
x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup>
H<sub>2</sub>O
```

- `<sup>` — raises text above baseline. Use: exponents, ordinals (1<sup>st</sup>)
- `<sub>` — lowers text below baseline. Use: chemical formulas, footnotes

---

## Line Break vs Horizontal Rule
```html
Line one<br>Line two     <!-- moves to next line, no gap -->

<hr>                     <!-- full-width horizontal line across page -->
```

| Tag | Type | Does |
|---|---|---|
| `<br>` | Unpaired | Line break — no new paragraph, no spacing |
| `<hr>` | Unpaired | Horizontal rule — visual divider between sections |

> `<hr>` has semantic meaning — signals a thematic break in content. Don't use it just for decoration; use CSS borders for that.

---

## Common Mistakes

- Using `<b>` and `<i>` everywhere instead of `<strong>` and `<em>` — works visually but weak semantically.
- Confusing `<s>` and `<del>` — `<s>` is cosmetic (outdated price, cancelled item), `<del>` is a document-level edit.
- Using `<u>` for emphasis — readers will think it's a link.
- Calling `<hr>` a "horizontal break" — it's a **horizontal rule**. `<br>` is the break.