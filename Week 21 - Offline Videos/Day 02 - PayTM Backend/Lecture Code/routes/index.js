// Express ko import kar rahe hain
const express = require('express'); 

// User aur Account ke different routers ko import kar rahe hain
const userRouter = require('./user');
const accountRouter = require('./account');

// Express ka Router bana rahe hain
const router = express.Router();

// "/user" route ke liye userRouter ka use kar rahe hain
router.use("/user", userRouter);

// "/account" route ke liye accountRouter ka use kar rahe hain
router.use("/account", accountRouter);

// Router ko export kar rahe hain taki dusre files me use ho sake
module.exports = router;
