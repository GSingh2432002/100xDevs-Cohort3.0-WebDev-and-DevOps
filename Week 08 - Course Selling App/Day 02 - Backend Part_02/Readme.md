# Create a Course Selling App

## Steps:

1. **Initialize a new Node.js project**
2. **Add dependencies**: Install `Express`, `jsonwebtoken`, and `mongoose`.
3. **Create `index.js`**
4. **Add route skeletons**:
    - User routes: 
      - Login
      - Signup
      - Purchase a course
      - See all courses
      - See purchased courses
    - Admin routes:
      - Login
      - Signup
      - Create a course
      - Delete a course
      - Add course content
5. **Define schemas** for:
    - User
    - Admin
    - Course
    - Purchase
6. **Add a database**: Use MongoDB and `dotenv` to store the database connection string.
7. **Add middlewares** for user and admin authentication.
8. **Complete routes**:
    - User login
    - Signup
    - Purchase a course
    - See courses
    - *(Extra points)*: Use Express routing to structure your routes better.
9. **Create the frontend**

## Good to Have:
- Use cookies instead of JWT for authentication.
- Add a rate limiting middleware.
- Frontend in EJS (low priority).
- Frontend in React.

---

## What is `process.env`?

`process.env` in Node is used to access the environment variables from the `.env` file. It is an object containing all the environment variables stored as key-value pairs. It returns the values as strings.

Example:
```javascript
// Include process module
const process = require('process');

// Printing process.env property value
console.log(process.env);
```