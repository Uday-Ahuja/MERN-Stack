# JavaScript — AJAX

---

## What is AJAX

**Asynchronous JavaScript and XML** — client-side mechanism to make HTTP requests and update the page **without a full page reload**.

- "Asynchronous" = request is sent, response comes back *whenever ready* — page doesn't freeze waiting.
- XML was original format; today **JSON is used** almost universally instead.

**Real-world examples:**
- Country → State → City cascading dropdown
- Email availability check while typing
- Dynamic field generation based on selection

---

## AJAX Lifecycle
```
CLIENT                          SERVER
──────                          ──────
1. Create XMLHttpRequest
2. open() — define request  →   readyState 0: request received
3. send() — fire request    →   readyState 1: request being taken up
                                readyState 2: request processing
                                readyState 3: response being generated
                                readyState 4: response ready & sent back
4. onreadystatechange fires
5. Check readyState==4
   & status==200
6. Use responseText/JSON
   to update DOM
```

---

## readyState Values

| Value | Meaning |
|---|---|
| 0 | Request not initialized |
| 1 | Server connection established |
| 2 | Request received |
| 3 | Processing request |
| 4 | Response ready |

---

## HTTP Status Codes (relevant ones)

| Code | Meaning |
|---|---|
| 200 | OK — success |
| 404 | Not found |
| 500 | Server error |

> Always check **both** `readyState==4` AND `status==200` before using response.

---

## XMLHttpRequest — Syntax
```js
var xhttp = new XMLHttpRequest();        // create instance
xhttp.open('GET', 'url', true);          // method, url, async(true=async / false=sync)
xhttp.send();                            // fire the request

xhttp.onreadystatechange = function(){   // fires every time readyState changes
    if(xhttp.readyState == 4 && xhttp.status == 200){
        // response is ready and successful
        document.getElementById("res").innerHTML = xhttp.responseText;
    }
}
```

---

## Full Example — Fetching API Data

Fetches photo data from JSONPlaceholder and dumps raw response into the page:
```html
<!DOCTYPE html>
<html>
<head>
    <script>
        function f1(){
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', "https://jsonplaceholder.typicode.com/photos", true);
            xhttp.send();

            xhttp.onreadystatechange = function(){
                if(xhttp.readyState == 4 && xhttp.status == 200){
                    document.getElementById("res").innerHTML = xhttp.responseText;
                }
            }
        }
    </script>
</head>
<body>
    <button onclick="f1()">Load Data</button>
    <h1 id="res"></h1>
</body>
</html>
```

> `responseText` returns raw string. To work with it as data: `JSON.parse(xhttp.responseText)` — gives you a JS array/object you can loop through.

---

## open() Parameters
```js
xhttp.open(method, url, async);
```

| Parameter | Values | Notes |
|---|---|---|
| `method` | `'GET'`, `'POST'` | GET for fetching, POST for sending data |
| `url` | string | API endpoint or file path |
| `async` | `true` / `false` | Always use `true` — `false` freezes the browser |

---

## AJAX vs Page Reload

| | Traditional | AJAX |
|---|---|---|
| Data load | Full page reload | Partial update |
| UX | Flicker, delay | Smooth, instant feel |
| Server load | Higher | Lower |

---

## Common Mistakes

- Setting `async` to `false` — browser freezes until response arrives. Never do this.
- Using `responseText` directly as object — it's a string. Parse it first: `JSON.parse(xhttp.responseText)`.
- Not checking `status==200` — `readyState==4` just means response arrived, not that it succeeded. Could be a 404.
- Assigning `onreadystatechange` after `send()` is technically fine in this code since AJAX is async, but define it before `send()` for clarity and safety.