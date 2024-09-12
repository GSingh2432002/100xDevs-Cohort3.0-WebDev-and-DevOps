const express = require("express");

const app = express();
app.use(express.json());

const users = [];

function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i=0; i<32; i++){
        // Use a simple function here to generate random token
        token = token + options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        message:"You are signed in!"
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

    if(foundUser){
        const token = generateToken();
        foundUser.token  = token;
        res.json({
            token: token
        })
    }
    else(
        res.status(403).send({
            message: "Invalid username or password"
        })
    )
})

// Create an endpoint "/me" that returns the user their information only if they send their token
app.get("/me", function(req,res){
    // Checks if token correct or not
    const token = req.headers.token;

    // Searches the users array for a user whose token matches the token from the request header. If a match found, that user object is stored in foundUser
    let foundUser = users.find(foundUser => foundUser.token === token);

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