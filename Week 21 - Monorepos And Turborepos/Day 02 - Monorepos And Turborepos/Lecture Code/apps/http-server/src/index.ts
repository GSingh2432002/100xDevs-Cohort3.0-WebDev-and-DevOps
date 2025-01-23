import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/signup", (req, res) => {
    res.send("Hello signup");
})

app.get("/signin", (req, res) => {
    res.send("Hello signin");
})

app.get("/chat", (req, res) => {
    res.send("Hello chat");
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});