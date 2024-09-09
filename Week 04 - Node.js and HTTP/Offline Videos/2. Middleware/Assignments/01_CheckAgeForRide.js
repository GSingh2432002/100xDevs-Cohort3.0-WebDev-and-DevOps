const express = require("express");
const app = express();

// this function is a middleware function that checks if the age of the person is greater than 18
function isOldEnoughMiddleware(req,res,next){
    // Get the age from the query parameter of the request object and store it in age variable
    const age = req.query.age;
    if (age>=18){
        next();
    } else{
        res.json({
            message:"Sorry you are not of age yet",
        });
    }
}

// Middleware
app.use(isOldEnoughMiddleware);

app.get("/ride1", function(req,res) {
    res.json({
        message:"You have successfully riden the ride 1",
    });
});

app.get("/ride2", function(req,res) {
    res.json({
        message: "You have successfully riden the ride 2",
    });
});

app.listen(3000);