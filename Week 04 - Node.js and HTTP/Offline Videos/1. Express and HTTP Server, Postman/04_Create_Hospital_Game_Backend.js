/*
    Your logic is like a doctor
    Request methods:-
    1. GET - Going for a consultation to get a check up
    2. POST - Going to get a new kidney inserted
    3. PUT - Going to get a kidney replaced
    4. DELETE - Going to get a kidney removed

    1. What should happen if they try to delte when there are no Kidneys?
    2. What should happen if they try to make a kidney healthy when all are already healthy?
*/

// Import express module using require function and store it in express variable
const express = require("express");

// Create an express application using express function
const app = express();

const users = [{
    name: "Gaurav",
    kidneys: [{
        healthy: false
    }]
}];

// Middleware to parse JSON data in the request body
app.use(express.json());

// Create a router handler for GET request
app.get("/", function(req,res){
    // get the kidneys of the first user in the users array
    const gauravKidneys = users[0].kidneys;

    // get the number of kidneys of the first user in the users array and store it in numberOfKidneys variable
    const numberOfKidneys = gauravKidneys.length;

    // Create a variable numberOfHealthyKidneys and set it to 0 to store the number of healthy kidneys
    let numberOfHealthyKidneys = 0;

    // loop through the kidneys of the first user in the users array
    for(let i=0; i<gauravKidneys.length; i++){
        // if the kidney is healthy, increment the numberOfHealthyKidneys variable
        if(gauravKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    
    // Calculate the number of unhealthy kidneys 
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    // send the response in JSON format with the number of kidneys, number of healthy kidneys and number of unhealthy kidneys
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

// Create a route handler for POST request
// Add a new kidney for the user with the health status provided in the request body
app.post("/", function(req,res){
    // get the isHealthy value from the request body and store it in isHealthy value from the request body
    const isHealthy = req.body.isHealthy;

    // Add a new kidney to the first user in the users array with the isHealthy value from the request body
    users[0].kidneys.push({
        healthy: isHealthy
    });

    // Send the response in JSON format with a message that the "kidney added successfully"
    res.json({
        msg: "Done!"
    });
});

// Create a route handler for PUT request
// Update all the unhealthy kidney to healthy kidney, if there are no unhealthy kidney then return a 411 status code.
app.put("/", function (req, res) {
    // check if there is atleast one unhealthy kidney, then update all the unhealthy kidneys to healthy
    if (isThereAtleastOneUnhealthyKidney()) {
        // loop through the kidneys of the first user in the users array and set the healthy value of the kidney to true
        for (let i = 0; i < users[0].kidneys.length; i++) {
            // set the healthy value of the kidney to true
            users[0].kidneys[i].healthy = true;
        }

        // send the response in JSON format with a message that the "kidney replaced successfully"
        res.json({
            message: "Kidney Replaced Successfully!",
        });
    } else {
        // send the response with status code 411 and a message that "You have no unhealthy kidney to replace"
        res.status(411).json({
            message: "You have no unhealthy kidney to replace",
        });
    }
});

// Create a route handler to DELETE request
// Remove all the unhealthy kidney, if there are no unhealthy kidney then return a 411 status code
app.delete("/", function (req, res) {
    // check if there is atleast one unhealthy kidney, then remove all the unhealthy kidneys
    if (isThereAtleastOneUnhealthyKidney()) {
        // create a new array to store the healthy kidneys
        const newKidneys = [];

        // loop through the kidneys of the first user in the users array and add the healthy kidneys to the new array
        for (let i = 0; i < users[0].kidneys.length; i++) {
            // if the kidney is healthy, add it to the new array of kidneys
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true,
                });
            }
        }

        // update the kidneys of the first user in the users array with the new array of kidneys
        users[0].kidneys = newKidneys;

        // send the response in JSON format with a message that the "unhealthy kidney is removed successfully"
        res.json({
            message: "Unhealthy Kidney Removed Successfully!",
        });
    } else {
        // send the response with status code 411 and a message that "You have no unhealthy kidney to remove"
        res.status(411).json({
            message: "You have no unhealthy kidney to remove",
        });
    }
});

// Helper function to check if there is atleast one unhealthy kidney
function isThereAtleastOneUnhealthyKidney(){
    // loop through the kidneys of the first user in the users array
    for(let i=0; i<users[0].kidneys.length; i++){
        // if the kidney is unhealthy, return true
        if(!users[0].kidneys[i].healthy){
            return true;
        }
    }
    // if there is no unhealthy kidney, return false
    return false;
}
// start the server on port 3000
app.listen(3000);
