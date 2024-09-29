// We can write directly by destructuring the Router
const {Router} = require("express");

// Create a new instance of the router
const courseRouter = Router();

courseRouter.post("/purchase", function(req,res) {
    res.json({
        message: "Purchase Endpoint"
    })
})

courseRouter.get("/preview", function(req,res) {
    res.json({
        message: "Preview Endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}