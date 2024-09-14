const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors())

const JWT_SECRET = "kirat123123";

const users = [];

function logger(req, res, next) {
    console.log(req.method + " request came");
    next();
}

// localhost:3000
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    // Check if a user with this username already exists
    if (users.find(user => user.username === username)) {
        return res.json({ message: "User already exists" });
    }
    
    users.push({ username, password });

    res.json({ message: "You are signed in" });
});

app.post("/signin", logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
            // Create the token here when the user is found
            const token = jwt.sign({ username: foundUser.username }, JWT_SECRET);
            res.header("jwt", token);
            res.header("random", "harkirat");
            return res.json({ token });
        }
    }

    if (!foundUser) {
        res.json({ message: "Credentials incorrect" });
    }
});

function auth(req, res, next) {
    const token = req.headers.token;

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        if (decodedData.username) {
            req.username = decodedData.username;
            next();
        } else {
            res.json({ message: "You are not logged in" });
        }
    } catch (error) {
        res.json({ message: "Invalid token" });
    }
}

app.get("/me", logger, auth, function(req, res) {
    const currentUser = req.username;
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === currentUser) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        res.json({ username: foundUser.username, password: foundUser.password });
    } else {
        res.json({ message: "User not found" });
    }
});

app.listen(3000);
