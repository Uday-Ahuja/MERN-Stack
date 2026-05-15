import express from "express";

const app = express();

// middleware (required for POST JSON)
app.use(express.json());

// GET route
app.get("/", (req, res) => {
    res.send("Hello from Home Page");
});

// GET with query params
app.get("/about", (req, res) => {
    const name = req.query.name || "Guest";
    res.send(`Hello from About Page hey ${name}`);
});

// POST route
app.post("/data", (req, res) => {
    const { name, age } = req.body;

    res.send(`Received POST data: Name = ${name}, Age = ${age}`);
});

// start server
app.listen(8000, () => {
    console.log("Server Started!");
});