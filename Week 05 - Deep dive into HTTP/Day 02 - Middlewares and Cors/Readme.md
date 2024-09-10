# What is Middleware?

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next.

1. Modifying the request or response objects.
2. Ending the request-response cycle.
3. Calling the next middleware function in the stack.

### Example: Modifying the request

```javascript
app.use(function(req, res, next) {
    req.name = "harkirat"
    next();
});

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
});
```

### Example: Ending the request/response cycle

```javascript
app.use(function(req, res, next) {
    res.json({
        message: "You are not allowed"
    });
});

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
});
```

### Example: Calling the next middleware function in the stack

```javascript
app.use(function(req, res, next) {
    console.log("request received");
    next();
});

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
});
```

# What is Route specific middleware?

Route-specific middleware in Express.js refers to middleware functions that are applied only to specific routes or route groups, rather than being used globally across the entire application.

### Example:

```javascript
const express = require('express');
const app = express();

// Middleware function
function logRequest(req, res, next) {
    console.log(`Request made to: ${req.url}`);
    next();
}

// Apply middleware to a specific route
app.get('/special', logRequest, (req, res) => {
    res.send('This route uses route-specific middleware!');
});

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

# What are other commonly used Middlewares?

1. `express.json()`: The `express.json()` middleware is a built-in middleware function in Express.js used to parse incoming request bodies that are formatted as JSON. This middleware is essential for handling JSON payloads sent by clients in POST or PUT requests.

### Example:

```javascript
const express = require('express');
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Define a POST route to handle JSON data
app.post('/data', (req, res) => {
    // Access the parsed JSON data from req.body
    const data = req.body;
    console.log('Received data:', data);

    // Send a response
    res.send('Data received');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

# What does `app.use(express.json())` do in Express?

The `app.use()` function adds a new middleware to the app. Essentially, whenever a request hits your backend, Express will execute the functions you passed to `app.use()` in order.

Using `express.json()`:
It is a built-in middleware function in Express. It parses incoming JSON requests and puts the parsed data in `req.body`.

### Example:

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.post('/test', function(req, res) {
    // Without `express.json()`, `req.body` is undefined.
    console.log(`${req.body}`);
});

// Test the above app using Axios
const server = await app.listen(3000);

const axios = require('axios');
// Prints "{ answer: 42 }"
await axios.post('http://localhost:3000/test', { answer: 42 });
```

# What is CORS?

Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that controls how resources on a web server can be requested from another domain. It's a crucial mechanism for managing cross-origin requests and ensuring secure interactions between different origins on the web.

CORS is a mechanism that allows a web server to specify which domains are allowed to access its resources. When a client makes a request to a server, the server includes a special header called `Access-Control-Allow-Origin` in its response. This header specifies which domain is allowed to access the resources. If the requesting domain is not in the allowed list, the browser will block the request.

For Example, refer to `Week 5 Lecture Code`.
