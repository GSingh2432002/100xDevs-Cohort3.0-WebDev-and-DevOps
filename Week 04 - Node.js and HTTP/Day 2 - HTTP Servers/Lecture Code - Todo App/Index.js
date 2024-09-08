// Import express module using require function and store it in express variable
const express = require("express");

// Create an express application using express function
const app = express();

// To store the todos in memory, create an empty array
let todos = [];

// Create a route handler for POST request
app.post("/", function(req,res) {
    // Add a new todo to the todos array in memory
    todos.push({
        title: "Learn HTTP Servers",
        id : 1
    });
});

// Create a route handler for DELETE request
app.delete("/", function(req,res) {
    // remove todos from the todos array in memory
    todos = todos.pop();
});

// Create a route handler for GET request
app.get("/", function(req,res) {
    // send the todos array as a response to the client
    res.send(todos);
});

// Start the server on port 3000
app.listen(3000);
