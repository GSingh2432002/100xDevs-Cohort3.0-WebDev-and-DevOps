// Express ko import kar rahe hai
const express = require("express"); 

// Express ka Router bana rahe hai
const router = express.Router();

// Zod library ko import kar rahe hai jo input validation ke lye use hoti hai
const zod = require("zod");

// Database models "User aur Account" ko import kar rahe hai
const { User, Account } = require("../db");

// JWT ko import kar rahe hain authentication ke liye
const jwt = require("jsonwebtoken");

// Secret key ko import kar rahe hain jo JWT sign karne ke lye use hoti hai
const { JWT_SECRET } = require("../config");

// Middleware import kar rahe hain jo authentication ko verify karega
const { authMiddleware } = require("../middleware");

// Bcrypt library ko import kar rahe hain jo password hashing aur comparison ke lye use hoti hai
const bcrypt = require("bcrypt");

// Signup ke input validation ke liye schema define kar rahe hai
const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

// User ke signup ke liye POST
router.post("/signup", async (req, res) => {
    // User input ko validate kar rahe hai
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Email already taken/Incorrect Inputs",
        });
    }

    // Check kar rahe hain ki email already exist toh nahi karta hai
    const existingUser = await User.findOne({
        username: req.body.username,
    });

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect Inputs",
        });
    }

    // Password ko hash kar rahe hain store karne se pehle
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Naya user create kar rahe hain
    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,  // Hashed password store kar rahe hain
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    // Naye user ka unique ID le rahe hain
    const userId = user._id;

    // Naye user ke liye ek account create kar rahe hain aur usme random balance de rahe hain
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000,
    });

    // JWT token generate kar rahe hain
    const token = jwt.sign(
        {
            userId,
        },
        JWT_SECRET
    );

    // Success response bhej rahe hain
    res.json({
        message: "User created successfully",
    });
});

// Signin ke input ke validation ke liye schema define kar rahe hain
const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

// User ke signin ke liye POST
router.post("/signin", async (req, res) => {
    // User input validate kar rahe hain
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect Inputs",
        });
    }

    // Database me user dhundh rahe hain
    const user = await User.findOne({
        username: req.body.username,
    });

    // Agar user nahi mila toh error bhej rahe hain
    if (!user) {
        return res.status(404).json({ message: "User not found. Please sign in." });
    }

    // Hashed password ko compare kar rahe hain
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    // Agar password incorrect hai toh error bhej rahe hain
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect password" });
    }

    // JWT token generate kar rahe hain
    const token = jwt.sign(
        {
            userId: user._id,
        },
        JWT_SECRET
    );

    // Token response me bhej rahe hain
    res.json({
        token: token,
    });
});

// User information update karne ke liye schema define kar rahe hain
const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

// User details update karne ke liye
router.put("/", authMiddleware, async (req, res) => {
  // Request body validate kar rahe hain
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }

  // Database me user ke details update kar rahe hain
  await User.updateOne(
    { _id: req.userId }, // Sahi query
    { $set: req.body }   // Ensure updates are applied properly
  );

  // Success response bhej rahe hain
  res.json({
    message: "Updated Successfully",
  });
});

// Bulk users ko filter karne ke liye GET
router.get("/bulk", async (req, res) => {
  // Filter value query parameters se le rahe hain
  const filter = req.query.filter || "";

  // Database me firstName ya lastName match karne wale users dhundh rahe hain
  const users = await User.find({
    $or: [
      {
        firstName: {
          "$regex": filter, // Matching users whose firstName contains the filter
        },
      },
      {
        lastName: {
          "$regex": filter, // Matching users whose lastName contains the filter
        },
      },
    ],
  });

  // Response bhej rahe hai filtered users ke saath
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

// Router ko export kar rahe hain taki dusre files me use ho sake
module.exports = router;
