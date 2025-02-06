const express = require("express");

const router = express.Router();

const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const bcrypt = require("bcrypt");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});
router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Email already taken/Incorrect Inputs",
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username,
    });

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect Inputs",
        });
    }

    // ✅ Hash the password before storing it
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,  // Store the hashed password
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    const userId = user._id;
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000,
    });

    const token = jwt.sign(
        {
            userId,
        },
        JWT_SECRET
    );

    res.json({
        message: "User created successfully",
        token: token,
    });
});


const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect Inputs",
        });
    }

    const user = await User.findOne({
        username: req.body.username,
    });

    if (!user) {
        return res.status(411).json({
            message: "Invalid email or password",
        });
    }

    // ✅ Compare the hashed password
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
        return res.status(411).json({
            message: "Invalid email or password",
        });
    }

    const token = jwt.sign(
        {
            userId: user._id,
        },
        JWT_SECRET
    );

    res.json({
        token: token,
    });
});


const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne(req.body, {
    id: req.userId,
  });

  res.json({
    message: "updated Successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          "$regex": filter,
        },
      },
      {
        lastName: {
          "$regex": filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
