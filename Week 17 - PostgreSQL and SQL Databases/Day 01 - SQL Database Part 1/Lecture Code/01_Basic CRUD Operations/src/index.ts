import { Client } from "pg"; 
// Importing the `Client` class from the "pg" (node-postgres) package. 
// This class is used to interact with a PostgreSQL database.

const pgClient = new Client("postgresql://neondb_owner:DgHC2GbZK0FP@ep-nameless-flower-a589gcpu.us-east-2.aws.neon.tech/neondb?sslmode=require");
// Creating a new instance of the `Client` class, passing in the database connection string.
// The connection string includes:
//   - Protocol: `postgresql://`
//   - Username: `neondb_owner`
//   - Password: `DgHC2GbZK0FP`
//   - Host: `ep-nameless-flower-a589gcpu.us-east-2.aws.neon.tech`
//   - Database name: `neondb`
//   - SSL mode: `sslmode=require` ensures the connection uses SSL for security.

async function main() {
// Defining an asynchronous function named `main`.
// This function will manage the database connection and perform a query.

    await pgClient.connect();
    // Using the `connect` method to establish a connection to the PostgreSQL database.
    // `await` ensures the connection is completed before moving to the next line.

    const response = await pgClient.query("UPDATE users SET username = 'sushmita' WHERE id = 5");
    // Sending an SQL query to the database using the `query` method.
    // This query updates the `username` field to 'sushmita' in the `users` table for the row where `id` is 5.
    // The `await` ensures the query is completed before proceeding.

    console.log(response.rows);
    // Logging the `rows` property of the `response` object.
    // For an UPDATE query, `rows` is usually empty unless the query uses a `RETURNING` clause.

}

main();
// Calling the `main` function to execute the database connection and query logic.
// Since `main` is asynchronous, it will execute its operations and return a promise.
