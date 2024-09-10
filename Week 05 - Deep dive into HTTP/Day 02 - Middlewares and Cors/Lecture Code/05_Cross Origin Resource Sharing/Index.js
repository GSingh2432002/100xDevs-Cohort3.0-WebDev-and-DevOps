const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// create a post route with the path /sum
app.post("/sum", function (req, res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    // log the values of a and b
    console.log(a, b);

    // send the sum of a and b as a response in json format
    res.json({
        ans: a + b,
    });
});

app.listen(3001);