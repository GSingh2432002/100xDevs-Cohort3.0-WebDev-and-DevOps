// You have been given an express server which has a few endpoints. Our task is to create a global middleware which will maintain a requests made to the server in the global requestCount variable.

const express = require("express");
const app = express();

let requestCount = 0;

app.use(function(req,res,next) {
    // increment the requestCount by 1
    requestCount = requestCount + 1;

    // Call the next middleware function in the stack 
    next();
});

// Create a route for GET request
app.get("/user", function(req,res){
    res.status(200).json({name:"Gaurav"});
});

// Create a route for POST request
app.post("/user", function(req,res){
    res.status(200).json({ name:"Created dummy user"});
});

// Create a route for GET request on /requestCount
app.get("/requestCount", function(req,res){
    res.status(200).json({ requestCount });
});

app.listen(3000);


