# HTML — Marquee Tag

Displays scrolling/moving text or content. Deprecated in HTML5 — CSS animations are the proper way now. Still works in browsers and commonly taught.

---

## Basic Syntax
```html
<marquee>Default scrolling text</marquee>
<marquee direction="right">Moving right</marquee>
<marquee height="100px" bgcolor="red">Styled marquee</marquee>
```

---

## Attributes

### Direction
| Value | Does |
|---|---|
| `left` | Moves right to left (default) |
| `right` | Moves left to right |
| `up` | Moves bottom to top |
| `down` | Moves top to bottom |

### Behaviour
| Value | Does |
|---|---|
| `scroll` | Loops continuously (default) |
| `slide` | Moves from one end to other, stops |
| `alternate` | Bounces back and forth |

### Spacing & Size
| Attribute | Does |
|---|---|
| `height` | Sets height of marquee box |
| `bgcolor` | Background colour |
| `hspace` | Horizontal space outside marquee (left + right margin) |
| `vspace` | Vertical space outside marquee (top + bottom margin) |

### Speed Control
| Attribute | Does |
|---|---|
| `scrollamount` | Distance moved per step — higher = faster |
| `scrolldelay` | Delay between each step in ms — higher = slower |

---

## Full Example
```html
<marquee direction="left" behavior="alternate" scrollamount="5" scrolldelay="50" bgcolor="#f0f0f0" height="50px" hspace="20" vspace="10">
  Bouncing text
</marquee>
```

---

## Common Mistakes

- `behaviour` is spelled `behavior` in the attribute — American spelling only.
- `scrollamount` and `scrolldelay` work opposite to intuition — high `scrollamount` = fast, high `scrolldelay` = slow.
- `height` as per content by default — only matters if `direction` is `up`/`down`, otherwise content wraps naturally.