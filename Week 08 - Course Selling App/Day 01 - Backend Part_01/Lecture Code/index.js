// Import express, mongoose modules
const express = require("express");
const mongoose = require("mongoose");

// Import the userRouter, courseRouter, adminRouter from the routes folder
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");

// Initialize express app
const app = express();

// So any routes defined in userRouter, courseRouter, adminRouter will be accessed through these.
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

// Create a main function to connect to the database and start the server
function main(){
    // Use the connect method to connect to the database and log a success message if the connection is successful
    const connection = mongoose.connect("mongodb+srv://gsingh332211:WdlJp5rC1UbwXWFr@cluster1.6ymvq.mongodb.net/course-selling-app")

    // Check if the connection is successful or not
    if(connection){
        // If the connection is successful
        console.log("Connected to the database");        
    }else{
        // If not successful
        console.log("Failed to connect to the database");        
    }

    // Start the server on port 3000
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");        
    })
}

// Call the main function
main();