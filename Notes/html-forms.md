# HTML — Forms (DHTML)

DHTML (Dynamic HTML) — HTML elements that take user input and interact with backend or JavaScript.

---

## Form Tag
```html
<form method="get" action="submit.php">
  <!-- inputs go here -->
</form>
```

| Attribute | Values | Does |
|---|---|---|
| `method` | `get` (default), `post` | `get` appends data to URL, `post` sends in request body — use `post` for sensitive data |
| `action` | file path or URL | Where form data is sent on submit |

---

## Input Tag

Unpaired. `type` attribute determines what it renders.
```html
<input type="text" id="username" value="default text">
```

| `type` | Renders | Notes |
|---|---|---|
| `text` | Single line text field | Multi-line? Use `<textarea>` |
| `email` | Text field | Validates email format on submit |
| `password` | Text field | Masks characters |
| `radio` | Round select button | Use same `name` on all options for single-select |
| `checkbox` | Tick box | Each is independent unless handled via JS |
| `date` | Date picker | |
| `time` | Time picker | |
| `submit` | Submit button | Sends form data to `action` |
| `reset` | Reset button | Clears form without reloading page |

**Radio button — same `name` for grouping:**
```html
<input type="radio" name="lang" value="java"> Java
<input type="radio" name="lang" value="python"> Python
<input type="radio" name="lang" value="js"> JavaScript
```

---

## Label Tag

Links text to an input — clicking the label focuses/selects the input.
```html
<label for="username">Name:</label>
<input type="text" id="username">
```

`for` on `<label>` must match `id` on `<input>`.

---

## Textarea

Multi-line text input.
```html
<textarea rows="5" cols="30" placeholder="Write here..."></textarea>
```

| Attribute | Does |
|---|---|
| `rows` | Height in lines |
| `cols` | Width in characters |
| `placeholder` | Ghost text shown when empty |

---

## Select (Dropdown)
```html
<select name="stack">
  <option value="mern">MERN</option>
  <option value="mean">MEAN</option>
  <option value="lamp">LAMP</option>
</select>
```

- `<select>` is the container, `<option>` is each item.
- `value` on `<option>` is what gets sent to backend — not the display text.

---

## Button Types
```html
<button type="submit">Submit</button>
<button type="button">Click Me</button>
<button type="reset">Reset</button>
```

| `type` | Does |
|---|---|
| `submit` | Sends form data to `action` URL |
| `button` | Does nothing by default — hook JS events to it |
| `reset` | Clears all form fields, no page reload |

---

## `&nbsp;`

Non-breaking space — adds a visible space in HTML where normal spaces collapse.
```html
Name: &nbsp;&nbsp; <input type="text">
```

Used for quick spacing in plain HTML. Use CSS `margin`/`padding` in real projects.

---

## Full Example
```html
<form method="post" action="submit.php">

  <label for="name">Name:</label>
  <input type="text" id="name" placeholder="Enter name"><br>

  <label for="email">Email:</label>
  <input type="email" id="email"><br>

  <label for="pass">Password:</label>
  <input type="password" id="pass"><br>

  <label>Language:</label>
  <input type="radio" name="lang" value="java"> Java
  <input type="radio" name="lang" value="python"> Python<br>

  <label>Topics:</label>
  <input type="checkbox" value="dsa"> DSA
  <input type="checkbox" value="web"> Web Dev<br>

  <label for="msg">Message:</label><br>
  <textarea id="msg" rows="4" cols="30" placeholder="Your message..."></textarea><br>

  <label for="stack">Stack:</label>
  <select id="stack" name="stack">
    <option value="mern">MERN</option>
    <option value="mean">MEAN</option>
  </select><br><br>

  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
  <button type="button">Custom Action</button>

</form>
```

---

## Common Mistakes

- `method="get"` for login/password forms — data appears in URL. Always use `post` for sensitive data.
- Missing `name` attribute on inputs — data won't be sent to backend even if `id` is set. `id` is for CSS/JS, `name` is for form submission.
- Radio buttons with different `name` values — they won't group, multiple can be selected.
- `<option>` without `value` — backend receives the display text instead, messy.
- Using `<input type="submit">` and `<button type="submit">` both in same form — double submission risk.