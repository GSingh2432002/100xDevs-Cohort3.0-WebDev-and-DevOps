const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    console.log("Decoded Token:", decoded);  // 🛠 Debugging line

    next();
  } catch (error) {
    console.log("JWT Verification Error:", error.message);  // 🛠 Debugging line
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ message: "Unauthorized: No token provided" });
      }      
  }
};

module.exports = {
  authMiddleware,
};
