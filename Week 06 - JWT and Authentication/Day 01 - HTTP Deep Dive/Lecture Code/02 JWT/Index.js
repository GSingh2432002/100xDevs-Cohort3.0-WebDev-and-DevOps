const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomgks";
const app = express();
app.use(express.json());

const users = [];


app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        message:"You are signedup!"
    })
})

app.post("/signin", function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u) {
        if (u.username == username && u.password == password){
            return true;
        }else{
            return false;
        }
    })

    // Here we convert username to jwt by calling .sign
    if(foundUser){
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);

        // foundUser.token  = token;
        res.json({
            token: token,
            message: "You have signed in!"
        })
    }
    else(
        res.status(403).send({
            message: "Invalid username or password",
        })
    )
})

// Create an endpoint "/me" that returns the user their information only if they send their token
app.get("/me", function(req,res){
    // Get the token from the headers
    const token = req.headers.token;

    // converting jwt to username by calling jwt.verify
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;

    // Searches the users array for a user whose token matches the token from the request header. If a match found, that user object is stored in foundUser
    let foundUser = users.find(foundUser => foundUser.username === username);

    // Checks if a user with the matching token was found.
    if(foundUser){
        res.send({
            username: foundUser.username
        });
    }else{
        res.status(401).send({
            message: "Unauthorized"
        });
    }
});

app.listen(3000);