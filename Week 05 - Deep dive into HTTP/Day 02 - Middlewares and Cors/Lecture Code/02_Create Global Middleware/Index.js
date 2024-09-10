const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req,res,next){
    requestCount++;

    console.log(`Total number of Requests = ${requestCount}`);

    next();
}

// use the requestCount middleware for all routes
app.use(requestIncreaser);

// Create a get route with the path /sum
app.get("/sum", function(req,res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // send the sum of a and b as a response in json format
    res.json({
        ans : a + b,
    });
});

// Create a get route with the path /subtract
app.get("/subtract", function(req,res){
    // get the values of a and b from the query parameters and convert them to integer
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // send the difference of a and b as a response in json format
    res.json({
        ans: a - b,
    });
});

// Create a get route with the path /multiply
app.get("/multiply", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b,
    });
});

// Create a get route with the path /divide
app.get("/divide", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a / b,
    });
});

app.listen(3000);