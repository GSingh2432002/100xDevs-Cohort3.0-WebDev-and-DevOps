const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db");
const {JWT_SECRET} = require("../config");

router.post("/signup", async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const existingAdmin = await Admin.findOne({
        username: username,
    });

    if(existingAdmin){
        return res.status(400).json({
            message: "Admin already exists",
        });
    }

    await Admin.create({
        username: username,
        password: password,
    });
    res.status(201).json({
        message: "Admin created Successfully",
    });
});

router.post("/signin", async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.findOne({
        username,
        password
    });

    if(user){
        const token = jwt.sign({
            username    
        }, JWT_SECRET);

        return res.status(200).json({
            token: token,
        });
    } else{
        return res.status(400).json({
            message: "Incorrect username and password",
        });
    }
});

router.post("/courses", adminMiddleware, async(req,res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price,
    });

    res.status(201).json({
        message: "Course Created Successfully",
        courseId: newCourse.id,
    });
});

router.get("/courses", adminMiddleware, async(req,res) => {
    const response = await Course.find({});

    res.status(200).json({
        courses: response,
    });
});

module.exports = router;