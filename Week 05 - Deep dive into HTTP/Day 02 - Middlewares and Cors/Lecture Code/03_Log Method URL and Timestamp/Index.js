const express = require("express");

const app = express();

//logs the method, timestamp and the url
function loggerMiddleware(req,res,next){
    console.log("Method is " + req.method);
    console.log("Host is " + req.hostname);
    console.log("Route is " + req.url);
    console.log(new Date());    
    next();
}

// use the requestCount middleware for all routes
app.use(loggerMiddleware);

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