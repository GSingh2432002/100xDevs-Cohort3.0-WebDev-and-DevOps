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
// MongoDB connection string (replace with your actual URI)
async function main() {
  try {
      // Wait for the connection to the database to complete
      await mongoose.connect("mongodb+srv://gsingh332211:WdlJp5rC1UbwXWFr@newcluster1.6ymvq.mongodb.net/New-Course-Selling-App", {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
      console.log("Connected to the database");

      // Start the server on port 3000
      app.listen(3000, () => {
          console.log("Server is listening on port 3000");
      });
  } catch (error) {
      // If there is an error connecting to the database
      console.error("Failed to connect to the database", error);
  }
}

// Call the main function
main();
