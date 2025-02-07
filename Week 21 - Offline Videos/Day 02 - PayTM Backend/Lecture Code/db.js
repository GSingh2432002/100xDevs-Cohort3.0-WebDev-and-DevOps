// Mongoose module ko import kar rahe hain
const mongoose = require("mongoose");

// MongoDB Atlas cluster se connect kar rahe hain
mongoose.connect(
  "mongodb+srv://gsingh332211:SXPS5nk7CdanF9tl@cluster0.ui0bd.mongodb.net/paytmDB"
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 25,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Yeh `User` collection se connect hoga
    ref: "User",  // Foreign key (User ka ID store karega)
    required: true,
  },
  balance: {
    type: Number,
    required: true, // Account ka balance required hai
  },
});

// User collection banaega.
const User = mongoose.model("User", userSchema);

// Account collection banaega.
const Account = mongoose.model("Account", accountSchema);

// User aur Account ko export kar rahe hain taki dusre files me use ho sake
module.exports = {
  User,
  Account,
};
