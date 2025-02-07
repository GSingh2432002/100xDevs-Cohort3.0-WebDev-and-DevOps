// Express ko import kar rahe hain
const express = require("express"); 

// Middleware ko import kar rahe hain, jisse authentication ko verify kiya jaega
const { authMiddleware } = require("../middleware");

// Database model (Account) ko import kar rahe hain
const { Account } = require("../db");

// Mongoose library ko import kar rahe hain
const { default: mongoose } = require("mongoose");

// Express ka Router bana kar API routes ko define kar rahe hain
const router = express.Router();

// Balance check karne ke liye GET 
router.get("/balance", authMiddleware, async (req, res) => {
  // User ke account ki jankari prapt kar rahe hain
  const account = await Account.findOne({
    userId: req.userId,
  });

  // Agar account nahi mila toh error response bhej rahe hain
  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }

  // Agar account mil gaya toh balance return kar rahe hain
  res.json({
    balance: account.balance,
  });
});

// Paise transfer karne ke liye POST
router.post("/transfer", authMiddleware, async (req, res) => {
  // Transaction ke liye mongoose session start kar rahe hain
  const session = await mongoose.startSession();
  session.startTransaction();

  // Request body se amount aur receiver "to" ki details nikal rahe hain
  const { amount, to } = req.body;
  
  // Agar amount ya "to" missing hai ya phir amount zero ya negative hai toh transaction abort karenge
  if (!amount || !to || amount <= 0) {
    await session.abortTransaction();
    return res.status(400).json({ message: "Invalid transfer details" });
  }

  // Sender ka account database mein se dhundh rahe hain
  const account = await Account.findOne({ userId: req.userId }).session(session);

  // Agar sender ka account nahi mila ya balance kam hai toh transaction abort karenge
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient Balance",
    });
  }

  // Receiver ka account database mein se dhundh rahe hain
  const toAccount = await Account.findOne({ userId: to }).session(session);

  // Agar receiver ka account nahi mila toh transaction abort karenge
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid Account",
    });
  }

  // Sender ke account se amount deduct kar rahe hain
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);

  // Receiver ke account me amount add kar rahe hain
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  // Transaction commit kar rahe hain, taki changes database me save ho jaye
  await session.commitTransaction();

  // Response bhej rahe hain ki transfer successful hogya hai
  res.json({
    message: "Transfer successful",
  });
});

// Router ko export kar rahe hain taki dusre files me use ho sake
module.exports = router;
