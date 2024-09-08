// Import express module using require function and store it in express variable
const express = require('express');

// Create an express application using express function
const app = express();

// Create a function to calculate the sum of two numbers
function sumOfTwoNumbers(number1, number2){
    // Add a and b and store the result in sum variable
    const sum = number1 + number2;

    // Return the sum of two numbers
    return sum;
}

/*
    * Create a route for the root URL to calculate the sum of two numbers
    * URL :- http://localhost:3000/?number1=5&number2=10
*/

app.get("/", function(req,res){
    // get the value of a and b from the query parameters using req.query object and parse them to integers using pareInt function
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);

    // Call the sumOfTwoNumbers function and pass a and b as argument to calculate the sum of two numbers and store it in sum variable
    const sum = sumOfTwoNumbers(number1,number2);

    // Send the response to the client with the sum of two numbers
    res.send("Sum of " + number1 + " and " + number2 + " is: " + sum);
});

// Start the server on port 3000
app.listen(3000);
