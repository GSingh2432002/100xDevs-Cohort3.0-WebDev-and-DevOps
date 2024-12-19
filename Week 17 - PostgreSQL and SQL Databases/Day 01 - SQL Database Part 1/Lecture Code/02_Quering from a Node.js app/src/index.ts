import { Client } from 'pg';

// Create a single reusable pgClient instance
const pgClient = new Client("postgresql://neondb_owner:DgHC2GbZK0FP@ep-nameless-flower-a589gcpu.us-east-2.aws.neon.tech/neondb?sslmode=require");

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
  try {
    await pgClient.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await pgClient.query(query, values);

    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await pgClient.end(); // Close the client connection
  }
}

// Example usage
getUser('user5@example.com').catch(console.error);
