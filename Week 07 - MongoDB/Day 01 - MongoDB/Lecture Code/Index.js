// Import express,jwt and mongoose
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// Import the UserModel and TodoModel from the db.js file
const { UserModel, TodoModel } = require("./db");

// Create an instance of the express module
const app = express();

// Parse the JSON data using express.json() middleware
app.use(express.json());

// Connect to the MongoDB database using the mongoose.connect() method
mongoose.connect("mongodb+srv://gsingh332211:WdlJp5rC1UbwXWFr@cluster1.6ymvq.mongodb.net/todo-1-sample")

// Create a JWT_SECRET variable for the secret key
const JWT_SECRET = "random123@";

// Create a POST route for signup endpoint
app.post("/signup", async function(req,res){
    // Get the mail,password,name from the request body
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // Create a new user using the UserModel.create() method
    await UserModel.create({
        email:email,
        password:password,
        name:name
    })
    res.json({
        message:"You are signed in"
    })
});

// Create a POST route for signin endpoint
app.post("/signin", async function(req,res){
    // Get the mail and password from the request body
    const email = req.body.email;
    const password = req.body.password;

    // Find the user with the given mail and password
    const user = await UserModel.findOne({
        email:email,
        password:password
    });

    // If the user is found, create a JWT token and send it to the client
    if(user){
        // Create a JET token using the jwt.sign() method
        const token = jwt.sign({
            id:user._id.toString()
        }, JWT_SECRET);
        res.json({
            token:token,
            message:"You are signed in"
        });
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
});

// Create a POST route to create new todo 
app.post("/todo", auth, function(req,res){
    // Get the userId fron the request object
    const userId = req.userId;
    
    // Get the title from the request body
    const title = req.body.title;

    // Create a new todo using TodoModel.create() method
    TodoModel.create({
        title,
        userId
    })
    res.json({
        userId:userId
    })
});

// Create a GET route to get all the todos
app.get("/todos", auth, async function(req,res){
    // Get the userId from the request object
    const userId = req.userId;

    // Find all the todos with the given userId
    const todos = await TodoModel.find({
        userId:userId
    })
    res.json({
        todos
    })
});

// Create a auth middleware function to authenticate the user
function auth(req,res,next){
    // Get hte token from the request headers
    const token = req.headers.token;

    // Verify the token using the jwt.verify() method
    const verifiedData = jwt.verify(token,JWT_SECRET);

    // If the token is valid, set the userId in the request object and call the next middleware
    if(verifiedData){
        // Set the userId in the request object
        req.userId = verifiedData.id;
        
        // Call the next middleware
        next();
    }else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
}
app.listen(3000);