const fs = require("fs");

fs.readFile("File.md", "utf-8", (err,data) => {
    const word = data.split(" ");
    let newData = "";

    for(let i=0; i<word.length; i++){
        if(word[i].length != 0){
            newData += word[i] + ' ';
        }
    }

    fs.writeFile("File.md", newData, (err) => {
        if(err){
            console.log("Error in writing file");
        }else{
            console.log("Extra space removed successfully");
        }
    })
})

const filename = "a.txt";
console.log(filename);
