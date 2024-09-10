const express = require("express");
const app = express();

let requestCount = 0;
function requestIncreaser(req,res,next){
    // increment the requestCount by 1
    requestCount++;

    console.log(`Total number of Requests = ${requestCount}`);
}

// Create a route handler function that calculates sum of two numbers
function realSumHandler(req,res){
    console.log("Control reached the real sum handler");

    // extract the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    //send the sum of a and b as a response
    res.json({
        ans: a + b,
    });
}

// Create a route handler function that calculates multiplication of two number
function realMultiplyHandler(req,res){
    console.log("Control reached the real multiply handler");

    // extract the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // send the sum of a and b as a response
    res.json({
        ans: a * b,
    });
}

// Create a get route with the path /sum
app.get("/sum", requestIncreaser, realSumHandler);

// Create a get route with the path /multiply
app.get("/multiply", requestIncreaser, realMultiplyHandler);

// Start the server on port 3000
app.listen(3000);