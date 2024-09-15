// JWTs
// - Write a function that takes in a username and password and returns a JWT token with the username encoded inside an object. Should return null if the username is not a valid email or if the password if less than 6 characters. Try using the zod library.
// - Write a function that takes a jwt as input and returns true if the jwt can be Decoded(not verified). Returnn false otherwise
// - Write a function that takes a jwt as input and returns true if the jwt can be verified. Return false otherwise.

const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

// Using Zod to Verifying email and password schema
function signJwt(username,password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(username);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    // Generating token 
    const signature = jwt.sign({
        username
    }, jwtPassword)
    return signature;
}
const ans1 = signJwt("hksingh@gmail.com=", "asdfsdfsdgdfsgsd");
console.log(ans1);

// Verifying JWT token
function verifyJwt(token){
    let ans2 = true;
    try {
        jwt.verify(token,jwtPassword);
    } catch (error) {
        ans2 = false;
    }
    return ans2;
}
const ans2 = verifyJwt("asasasd");
console.log(ans2);

// Decoding token
function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}
console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"));
