const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function adminMiddleware(req,res,next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try{
        const decodeValue = jwt.verify(jwtToken, JWT_SECRET);

        if(decodedValue.username){
            next();
        } else{
            res.status(403).json({
                message: "You are not authenticated",
            });
        }
    } catch(e){
        res.status(401).json({
            message: "Incorrect Inputs",
        });
    }
}

module.exports = adminMiddleware;