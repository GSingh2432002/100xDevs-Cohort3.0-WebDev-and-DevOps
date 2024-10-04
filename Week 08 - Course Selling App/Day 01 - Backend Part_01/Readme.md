# Create a course Selling app
- Initialize a new Node.js project
- Add Express, jsonwebtoken, mongoose to it as dependency
- Create index.js
- Add route skeleton for user login, singup, purchase a course, sees all course, see the purchased course
- Add routes for admin login signup, create a course, delete a course, add course content
- Add middlewares for user and admin auth
- Add a database, use dotenv to store the database connection string
- Define the Schema for User, Admin, Course, Purchase
- Complete the routes for user login, signup, purchase a course, see course.

## About Routing

The line `const { Router } = require("express");` is a form of destructuring assignment in JavaScript. Here's what it means:

1. `require("express")` imports the Express library, which is a Node.js web application framework. This `require` function loads the Express module so that you can use its features in your application.

2. `{ Router }` is destructuring the object returned by `require("express")`. Express exports several things, one of which is `Router`.This syntax allows you to directly extract the `Router` function from the `express` module without importing the entire `express` object.

3. `Router` is a feature of Express that allows you to create modular, mountable route handlers. It's useful when you want to break up your routes into separate modules for better organization and modularity.

### Example:
```javascript
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from Router!");
});

module.exports = router;
```
