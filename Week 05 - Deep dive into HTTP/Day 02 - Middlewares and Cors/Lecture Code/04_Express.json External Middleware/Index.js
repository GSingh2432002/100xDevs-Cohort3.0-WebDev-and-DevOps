const express = require("express");

const app = express();

// Import the body-parser module using require function and store it in bodyParser variable
const bodyParser = require("body-parser");

// Middleware to parse the request body as JSON
// app.use(express.json()); // we dont use express.json becoz it inherently uses body-parser module.

// Middleware to parse the request bdoy as JSON using body-parser
app.use(bodyParser.json());

app.get("/sum", function (req, res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    // send the sum of a and b as a response in json format
    res.json({
        ans: a + b,
    });
});

app.get("/subtract", function (req, res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    // send the sum of a and b as a response in json format
    res.json({
        ans: a - b,
    });
});

// Server listens on port 3000
app.listen(3000);