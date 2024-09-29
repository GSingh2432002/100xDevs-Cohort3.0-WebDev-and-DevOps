/*
No need to do this as of now onwards!
// Import express module
const express = require("express");
// Create a new Router instance for user routes
const Router = express.Router;
*/

// We can write directly by destructuring the Router
const {Router} = require("express");

// Create a new instance of the router
const userRouter = Router();

userRouter.post("/signup", function(req,res) {
    res.json({
        message: "Signup Endpoint"
    })
})

userRouter.post("/signin", function(req,res) {
    res.json({
        message: "Signin Endpoint"
    })
})

userRouter.get("/purchases", function(req,res) {
    res.json({
        message: " User Purchases Endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}