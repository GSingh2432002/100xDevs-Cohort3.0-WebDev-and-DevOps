// Import express,jwt and mongoose
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {z} = require("zod");

// Import the UserModel and TodoModel from the db.js file
const { UserModel, TodoModel } = require("./db");

// Create an instance of the express module
const app = express();

// Parse the JSON data using express.json() middleware
app.use(express.json());

// Connect to the MongoDB database using the mongoose.connect() method
mongoose.connect("mongodb+srv://gsingh332211:WdlJp5rC1UbwXWFr@cluster1.6ymvq.mongodb.net/todo-2-sample")

// Create a JWT_SECRET variable for the secret key
const JWT_SECRET = "random123@";

// Create a POST route for signup endpoint
app.post("/signup", async function(req,res){
    // Input validation using Zod
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(100),
        name: z.string().min(3).max(30),
    });

    // Parse the request body using the requireBody.safeParse() method to validate the data format
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    // If data format is incorrect, send an error message to the client
    if(!parseDataWithSuccess.success){
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }
    // Get the mail,password,name from the request body
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // Hash the password using the bcrypt library using .hash() method
    const hashedPassword = await bcrypt.hash(password, 5);
    
    // Error handling for creating new user
    try{
        // Create a new user using the UserModel.create() method
        await UserModel.create({
            email:email,
            password:hashedPassword,
            name:name
        });
    } catch(error){
        // If the user already exists, send an error message to the client
        return res.json({
            message: "User already exists",
        });
    }
    
    // Send a response to the client
    res.json({
        message:"You are signed in",
    });
});

// Create a POST route for signin endpoint
app.post("/signin", async function(req,res){
    // Get the mail and password from the request body
    const email = req.body.email;
    const password = req.body.password;

    // Find the user with the given mail and password
    const user = await UserModel.findOne({
        email:email,
    });

    // If the user is not found, send an error message to the client
    if(!user){
        return res.status(403).json({
            message: "Invalid credentials",
        });
    }

    // Compare the password with the hashed password using the bcrypt.compare() method
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the user password matches
    if(passwordMatch){
        // Create a JET token using the jwt.sign() method
        const token = jwt.sign({
            id:user._id.toString()
        }, JWT_SECRET);
        // Send the token to client
        res.json({
            token:token,
            message:"You are signed in",
        });
    }else{
        // If the user is not found, send an error message to the client
        res.status(403).json({
            message:"Incorrect Credentials"
        });
    }
});

// Create a POST route to create new todo 
app.post("/todo", auth, async function(req,res){
    // Get the userId fron the request object
    const userId = req.userId;
    
    // Get the title from the request body
    const title = req.body.title;

    // Create a new todo using TodoModel.create() method
    await TodoModel.create({
        title,
        userId
    })
    res.json({
        message: "Todo created",
    });
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
        todos,
    });
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