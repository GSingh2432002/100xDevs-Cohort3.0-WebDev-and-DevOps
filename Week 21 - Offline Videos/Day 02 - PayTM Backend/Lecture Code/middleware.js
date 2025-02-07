// JWT_SECRET ko config file se import kar rahe hain
const { JWT_SECRET } = require("./config"); 
const jwt = require("jsonwebtoken");

// Middleware function jo authentication ke liye use hoti hai
const authMiddleware = (req, res, next) => {
    // Request headers se authorization header nikal rahe hain
    const authHeader = req.headers.authorization;

    // Agar authorization header nahi mila ya "Bearer" se start nahi ho raha to error bhejenge
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ message: "Unauthorized: No token provided" });
    }

    // "Bearer <token>" me se sirf token extract kar rahe hain
    const token = authHeader.split(" ")[1];

    try {
        // Token ko verify kar rahe hain JWT_SECRET ke saath
        const decoded = jwt.verify(token, JWT_SECRET);

        // Agar token sahi hai to `req.userId` me user ka ID save kar rahe hain
        req.userId = decoded.userId;

        // next() call kar rahe hain taaki agla middleware ya route execute ho sake
        next();
    } catch (error) {
        // Agar token invalid ya expired hai to error response bhej rahe hain
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

// Middleware ko export kar rahe hain taaki doosre files me use kiya ja sake
module.exports = {
  authMiddleware,
};
