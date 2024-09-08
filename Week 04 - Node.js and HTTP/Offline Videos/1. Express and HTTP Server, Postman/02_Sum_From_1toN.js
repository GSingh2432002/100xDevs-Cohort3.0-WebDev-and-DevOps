// Import express module using require function and store it in express variable
const express = require('express');

// Create an express application using express function
const app = express();

// Create a function to calculate the sum of numbers from 1 to N
function sumFrom1toN(number){
    // Initialize sum variable to store the sum of numbers from 1 to N
    let sum = 0;
    // Loop through numbers from 1 to n and add them to sum
    for(let i=1; i<=number; i++){
        // Add i to sum
        sum = sum + i;
    }
    // Return the sum of numbers from 1 to N
    return sum;
}

/*
    * Create a route for the root URL
    * Query Parameters: It is a way to send data to the server as key-value pairs. It is appended to the URL after a question mark (?).
    * Eg:- http://localhost:3000/?n=5
    * Here n is the key and 5 is the value. n is query parameter and 5 is the value of n.
    * Use req.query to access the query parameters in the request object.
    * If we want to add multiple query parameters, you can separate them with an ampersand (&).
    * Eg:- http://localhost:3000/?a=5&b=10&c=15
    * Here a,b,c are query parameters and 5, 10, 15 are their respective values.
*/

app.get("/", function(req,res){
    // get the value of n from the query parameters using req.query object
    const n = req.query.n;

    // Call the sumFrom1toN function and pass n as an argument to calculate the sum of numbers from 1 to n and store it in sum variable
    const sum = sumFrom1toN(n);

    // Send the reponse to the client with the sum of numbers from 1 to n
    res.send("Your sum is: " + sum);
});

// Start the server on port 3000
app.listen(3000);