// Import mongoose to interact with MongoDb
const mongoose = require("mongoose");

// Use Schema and ObjectId from the mongoose for creating models
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Define the User Schema with fields for email,password and name
const User = new Schema({
    email: String,
    password: String,
    name: String
})

// Define the Todo Schema with fields for title,done and UserId
const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

// Create Mongoose models for users and todos collections using the User and Todo Schemas
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

// Export the User and Todo models for user in other files
module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel,
};