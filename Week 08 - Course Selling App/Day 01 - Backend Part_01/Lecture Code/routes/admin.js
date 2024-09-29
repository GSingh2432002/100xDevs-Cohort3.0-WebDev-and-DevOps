// We can write directly by destructuring the Router
const {Router} = require("express");

// Create a new instance of the router
const adminRouter = Router();

adminRouter.post("/signup", function(req,res) {
    res.json({
        message: "Admin Signup Endpoint"
    })
})

adminRouter.post("/signin", function(req,res) {
    res.json({
        message: "Admin Signin Endpoint"
    })
})

adminRouter.post("/", function(req,res) {
    res.json({
        message: "Admin courses Endpoint"
    })
})

adminRouter.put("/", function(req,res) {
    res.json({
        message: "Admin putting courses Endpoint"
    })
})

adminRouter.get("/bulk", function(req,res) {
    res.json({
        message: "Admin getting bulk courses Endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}