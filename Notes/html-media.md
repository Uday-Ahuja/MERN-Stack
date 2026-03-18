# HTML — Media Tags

---

## Image
```html
<img src="filepath.jpg" height="200" width="300">
```

- Unpaired tag — no closing tag.
- `src` — file path (relative or absolute URL)
- `height` / `width` — in px by default. Set one only to preserve aspect ratio.

---

## Audio
```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
</audio>
```

- `<audio>` is the container, `<source>` is the child that points to the file.
- `type` common values: `audio/mp3`, `audio/ogg`, `audio/wav`

**Attributes** (added directly on `<audio>` tag):

| Attribute | Does |
|---|---|
| `controls` | Shows play/pause/volume UI |
| `loop` | Replays automatically when done |
| `autoplay` | Starts playing on page load |
| `muted` | Starts muted |
```html
<audio controls loop autoplay muted>
  <source src="audio.mp3" type="audio/mp3">
</audio>
```

> `autoplay` is blocked by most browsers unless `muted` is also set.

---

## Video
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

- Same structure as audio — `<video>` container, `<source>` child.
- Same attributes apply: `controls`, `loop`, `autoplay`, `muted`
- Can also set `height` and `width` directly on `<video>` tag.
```html
<video controls loop width="640" height="360">
  <source src="video.mp4" type="video/mp4">
</video>
```

---

## Quick Reference

| Tag | Paired | Notes |
|---|---|---|
| `<img>` | No | `src`, `height`, `width` |
| `<audio>` | Yes | Needs `<source>` child |
| `<video>` | Yes | Needs `<source>` child, accepts `height`/`width` |
| `<source>` | No | `src` + `type` required |

---

## Common Mistakes

- Setting both `height` and `width` on `<img>` with wrong ratio — image stretches. Set only one.
- Putting `controls` on `<source>` instead of `<audio>`/`<video>` — won't work.
- `autoplay` without `muted` — browsers block it silently, audio won't play.
- Wrong `type` format — audio is `audio/mp3`, video is `video/mp4`. Not just `mp3` or `mp4`.

---

## Anchor Tag
```html
<a href="https://github.com" target="_blank">GitHub</a>
```

- Paired tag — the text between tags becomes the clickable link.
- `href` — destination: URL, relative file path, or `#id` for same-page jump.

**`target` values:**

| Value | Does |
|---|---|
| `_self` | Opens in same tab (default) |
| `_blank` | Opens in new tab |
| `_parent` | Opens in parent frame |
| `another-file.html` | Opens that specific file |
```html
<a href="https://google.com" target="_self">Same tab</a>
<a href="https://google.com" target="_blank">New tab</a>
<a href="contact.html" target="_parent">Parent frame</a>
<a href="about.html">Another file (no target = _self)</a>
```

**Anchor as image link:**
```html
<a href="https://github.com" target="_blank">
  <img src="logo.png" width="100">
</a>
```

---

## Common Mistakes

- `target="_blank"` without `rel="noopener"` — minor security issue, malicious page can access your tab via `window.opener`. Add `rel="noopener noreferrer"` in production.
- Leaving `href` empty (`href=""`) — reloads the page. Use `href="#"` as placeholder during dev.
- Using full absolute path for local files — breaks on other machines. Always use relative paths for local files.