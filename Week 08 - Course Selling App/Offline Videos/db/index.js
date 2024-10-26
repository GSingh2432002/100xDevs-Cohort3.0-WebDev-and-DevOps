const mongoose = require("mongoose");
const {MONGO_URL} = require("../config");

mongoose.connet(MONGO_URL)
    .then(() => console.log("Connected to MongoDB Successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

const AdminSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
});

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
});

// Define the Course Schema
const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number,
});

// Create models for Admin, User and Course using the respective schemas
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
};