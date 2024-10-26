const express = require("express");

const jwt = require("jsonwebtoken");

const router = express.Router();

const { User, Course } = require("../db");

const middleware = require("../middleware/user");

const {JWT_SECRET} = require("../config");

router.post("./signup", async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await User.findOne({
        username: username,
    })

    if(existingUser){
        return res.status(400).json({
            message: "user already exists",
        });
    }

    await User.create({
        username,
        password,   
    });

    res.status(201).json({
        message: "user created successfully",
    });
});

router.post("/signin", async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username,
        password,
    });

    if(user){
        const token = jwt.sign({
            username,   
        }, JWT_SECRET);
        
        return res.status(200).json({
            token: token,
        });
    }else{
        return res.status(400).json({
            message: "Incorrect username and password",
        });
    }
});

router.post("/courses/:courseId", userMiddleware, async (req,res) => {
    const courseId = req.params.courseId;
    const username = req.username;

    try{
        await User.updateOne(
            {
                username: username,
            },
            {
                $push: {
                    purchasedCourses: courseId,
                },
            }
        );
    } catch(e){
        return res.status(400).json({
            message: "Course purchase failed",
            error: err.message,
        });
    }

    res.status(200).json({
        message: "course purchased successfully",
    });
});

router.get("/purchasedCourses", userMiddleware, async(req,res) => {
    const username = req.username;
    const user = await User.findOne({
        username,
    });

    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses,
        },
    });

    res.status(200).json({
        courses,
    });
});

module.exports = router;
