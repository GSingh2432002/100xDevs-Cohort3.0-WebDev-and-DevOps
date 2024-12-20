// Importing the Client class from the "pg" (node-postgres) library for interacting with PostgreSQL
import { Client } from "pg"; 

// Importing the Express framework for building a web server
import express from "express";

// Initializing the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Creating a PostgreSQL client instance with the database connection string
const pgClient = new Client("postgresql://neondb_owner:QUIRr1ZwpgM7@ep-steep-sea-a50fgmxu.us-east-2.aws.neon.tech/neondb?sslmode=require");

// Connecting to the PostgreSQL database
pgClient.connect();

// Setting up a POST endpoint for user signup
app.post("/signup", async (req, res) => {
    // Extracting user data from the request body
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try {
        // SQL query to insert user data into the "users" table and return the generated user ID
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        // Executing the query with parameterized inputs to prevent SQL injection
        const insertResponse = await pgClient.query(insertQuery, [username, email, password]);

        // Extracting the generated user ID from the query response
        const userId = insertResponse.rows[0].id;

        // SQL query to insert address data into the "addresses" table, associating it with the user ID
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        // Executing the query with parameterized inputs
        const addressResponse = await pgClient.query(addressQuery, [city, country, street, pincode, userId]);

        // Sending a success response to the client
        res.json({
            message: "You have signed up successfully",
        });
    } catch (error) {
        // Logging any errors that occur during database operations
        console.log(error);

        // Sending an error response to the client
        res.json({
            message: "Error while signing up",
        });
    }
});

// Starting the Express server on port 3000
app.listen(3000);
