const file = require("fs");
const data = "User has written into this file";

file.writeFile("file.md", data, (err) => {
    if (err) console.log("Error in writing to file");
    else console.log("Data written successfully");   
})