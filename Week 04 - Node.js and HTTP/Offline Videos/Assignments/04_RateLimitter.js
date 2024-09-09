//Your task is to create a global middleware (app.use) which will rate limit the requests from a user to only 5 request per second. If a user sends more than 5 requests in a single second, the server should block them with a 404. User will be sending in their user id in the header as 'user-id'. You have been given a numberOfRequestsForUser object to start off with which clears every one second

const express = require("express");

const app = express();

// create a global variable numberOfRequestsForUser and assign it an empty object
let numberOfRequestsForUser = {};

// Create a setInterval function that clears the numberOfRequestForUsers object every one second
setInterval(() => {
    // clear the numberOfRequestForUsers object every one second
    numberOfRequestsForUser = {};
}, 1000);

// Create a middleware function that checks the number of requests made by a user in a single second
app.use(function(req,res,next){
    // get the user id from the headers of the request object and store it in userId variable
    const userId = req.headers["user-id"];

    if (numberOfRequestsForUser[userId]){
        // increment the number of requests made by the user by 1
        numberOfRequestsForUser[userId]++;

        // if greater than 5
        if(numberOfRequestsForUser[userId] > 5){
            res.status(404).send("No entry!");
        } else{
            next(); // Call the next middleware function in the stack
        }
    } else{
        // increment the number of requests made by the user by 1 and call the next middleware function in the stack
        numberOfRequestsForUser[userId] = 1;
        next();
    }
});

// create a route for GET request on /user path
app.get("/user", function (req, res) {
    // return a json response with name as Bharat
    res.status(200).json({ name: "GKSingh" });
});

// create a route for POST request on /user path
app.post("/user", function (req, res) {
    // return a json response with message "created dummy user
    res.status(200).json({ msg: "created dummy user" });
});

// Start the server on port 3000
app.listen(3000);