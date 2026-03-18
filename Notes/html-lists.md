# HTML — Lists

---

## Unordered List `<ul>`

No sequence — bullet points. Default bullet: `disc`.
```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```

Change bullet style with `type` attribute:

| `type` value | Renders |
|---|---|
| `disc` | ● (default) |
| `circle` | ○ |
| `square` | ■ |
| `none` | no bullet |
```html
<ul type="square">
  <li>C</li>
  <li>C++</li>
  <li type="circle">Java</li>   <!-- overrides for single item -->
</ul>
```

---

## Ordered List `<ol>`

Sequenced — numbers by default. Change with `type` attribute:

| `type` value | Renders |
|---|---|
| `1` | 1, 2, 3 (default) |
| `A` | A, B, C |
| `a` | a, b, c |
| `I` | I, II, III |
| `i` | i, ii, iii |
```html
<ol type="A">
  <li>C</li>
  <li>C++</li>
  <li type="1">Java</li>   <!-- overrides for single item -->
</ol>
```

---

## Full Example — Both List Types
```html
<h3>Programming Languages</h3>

<ul type="disc">
  <li>C</li>
  <li>C++</li>
  <li type="square">Java</li>
  <li>Python</li>
</ul>

<ol type="1">
  <li>HTML</li>
  <li>CSS</li>
  <li type="A">JavaScript</li>
  <li>React</li>
</ol>
```

---

## Nested Lists

Lists inside lists. Any combination works — `<ol>` inside `<ul>`, `<ul>` inside `<ol>`, same type inside same type.
```html
<ol>
  <li>Frontend
    <ul type="circle">
      <li>HTML</li>
      <li>React</li>
      <li>Angular</li>
    </ul>
  </li>
  <li>Backend
    <ul type="circle">
      <li>Java</li>
      <li>Python</li>
    </ul>
  </li>
</ol>
```

Renders:
```
1. Frontend
   ○ HTML
   ○ React
   ○ Angular
2. Backend
   ○ Java
   ○ Python
```

---

## Common Mistakes

- `type` attribute on lists is technically deprecated in HTML5 — CSS `list-style-type` is the proper way. But `type` still works and is commonly taught. Know both exist.
- Putting anything other than `<li>` as a direct child of `<ul>`/`<ol>` — invalid HTML.
- Forgetting to close `<li>` tags in nested lists causes broken indentation.