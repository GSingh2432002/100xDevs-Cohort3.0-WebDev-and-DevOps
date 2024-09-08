
# What is Express.js?
Express.js is a fast, flexible and minimalist web framework for Node.js. It's effectively a tool that simplifies building web applications and APIs using JS on the server side. It offers a robust set of features that enhance your productivity and streamline your web application. It makes it easier to organize your applications functionality with middleware and routing.
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

# What is HTTP Protocol?
HTTP stands for Hypertext Transfer Protocol is a protocol used for exchanging information over the internet. HTTP is like the delivery system for information on the internet. It makes sure information goes from one place to another, like how ships carry goods across the ocean.
It makes internet work. It's a way for web browser and servers to talk to each other and send things like web pages back and forth. 

# What is the HTTP Request-Response Cycle?
The request-response model is a fundamental communication pattern. It describes how data is exchanged between a client and a server or between two systems.
Eg:-
* Websockets
* WebRTC
* GRPC

# How to Create HTTP Requests?
To create a valid HTTP request, we need:-
* A URL
* The HTTP method
* A list of headers
* The request body

# What is Domain Name?
The way to reach a server is through its Domain name. or A domain name is a string of text that maps to an alphanumeric IP address used to access a website from client software.

# What is IP?
IP stands for Internet Protocol. An IP address is a network address for your computer, so that internet knows where to send your mails, data etc.
Eg:-
* Domain Name - Phone Contact
* IP - There real phone number

# What is port?
In networking, ports are logical endpoints used by protocols to indetify specific processes running on a computer or server. Each port is associated with a specific process or service. Ports allow computers to easily differentiate between different kinds of traffic: emails go to a different port than webpages.

# What is Port Number?
Ports are standardized across all network-connected devices,  with each port assigned a number.

# What is Methods?
We use HTTP methods to connect client-side code to server-side code and databases. The database for a particular website is too large, so it is not possible to store the database on the client side. That's why we implement a server and setup different HTTP routes through which we can exchange data from the client side to the server side.
HTTP methods are used to specify the type of action that the client wants to perform on a resource on the server.
* GET Method - Retrieve data from a server. 
* POST Method - Submit data to be processed by a server.
* PUT Method - Update or create a resource on the server.
* DELETE Method - Remove a resource from the server. 

# What are Response Methods?
The Response object (response) provides the HTTP response that an Express app sends when it receives an HTTP request. or The response represents what the server returns you in response to the request.
Eg:-
* res.send() - to send data
* res.status() - Specify HTTP response code
* res.json() - to return the JSON data we are going to look at the syntax and examples in details in the later section of the article.
* res.render() - it automatically compile the templates to standard HTML and deliver client feedback Syntax.

# JSON
It stands for JavaScript Object Notation. It is a lightweight, text-based format used for data interchange.
```json
{
  "name": "John Doe",
  "age": 30,
  "isEmployed": true,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  },
  "phoneNumbers": ["123-456-7890", "987-654-3210"]
}
```

# What is Status Codes?
HTTP status codes are three-digit numbers returned by a server to indicate the outcome of a client's request. They provide information about the status of the request and the server's response.
Eg:-
## 200 series (Success)

- **200 OK**: The request was successful, and the server returned the requested resource.
- **204 No Content**: The request was successful, but there is no content to send in the response

### 300 series (Redirection)

- **301 Moved Permanently**: The requested resource has been moved to a new URL permanently. The client should use the new URL provided in the response.
- **304 Not Modified**: The resource has not been modified since the last request. The client can use the cached version.

### 400 series (Client Error)

- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The request requires user authentication. The client must provide credentials.
- **403 Forbidden**: The server understood the request but refuses to authorize it.
- **404 Not Found**: The requested resource could not be found on the server.

### 500 series (Server Error)

- **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the request.
- **502 Bad Gateway**: The server received an invalid response from an upstream server while acting as a gateway or proxy.

# What is Body?
In HTTP communications, the body(or payload) refers to the part of an HTTP message that contains the actual data being sent to the server. It is usually JSON data that is transferred to the server. or The body of an HTTP request is the part where data is sent to the server, typically for POST, PUT, PATCH and DELETE requests. The body contains the actual data that client wants to send to the server, such as form data, JSON, XML or other types of content.
Eg:-
```json
{
  "username": "john_doe",
  "email": "john@example.com"
}
```

# What is Routes?
In the context of HTTP, routes are paths or endpoints that define how incoming requests are handled by a server. Routing is a mechanism used to direct incoming HTTP requests to appropriate handler functions or resources based on the URL path.
Eg:-
```js
const express = require('express');
const app = express();

// Route to handle a GET request to the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route to handle a GET request to the about page
app.get('/about', (req, res) => {
  res.send('About Us');
});

// Route to handle a POST request to the contact page
app.post('/contact', (req, res) => {
  res.send('Contact Form Submitted');
});

// Route to handle a GET request to fetch a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```
