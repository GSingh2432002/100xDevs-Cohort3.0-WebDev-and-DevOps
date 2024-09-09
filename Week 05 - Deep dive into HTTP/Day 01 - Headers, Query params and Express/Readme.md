
# What is Headers?

HTTP headers are key-value pairs sent between a client and a server in an HTTP request or response. They convey metadata about the request or response, such as content type, auth information etc.

## Some common headers:

1. **Authorization** - Sends the user auth information.
2. **Content-type** - Type of information client is sending (json, binary, etc.).
3. **Referer** - Which URL is this request coming from.

### Types of headers:

1. **Request headers** - The headers the client sends out in the request are known as request headers.
2. **Response headers** - The headers that the server responds with are known as the response headers.

# Headers vs Body?

### Headers:
**Definition:** Headers are key-value pairs that provide metadata about the HTTP request or response. They don't contain the main content but rather information about the content or the communication process.

**Purpose:** Headers can specify the type of content being sent (Content-Type), the length of the content (Content-length), the server technology used, authentication credentials, cookies, and much more.

**Eg:**
```
Content-Type: application/json
Authorization: Bearer <token>
User-Agent: Mozilla/5.0
```

### Body:
**Definition:** The body is the main content of the HTTP request or response. This is where the actual data being sent is placed, such as form data, JSON objects, HTML, files, etc.

**Purpose:** The body carries the primary data that is being communicated. For example, in a POST request, the body might contain the data submitted from a form.

**Eg:**
```
{
    "username": "exampleUser",
    "password": "examplePass"
}
```

### Key Differences:
1. **Location** - Headers are placed at the beginning of the HTTP message, before the body.
2. **Function** - Headers provide information about the request or response, while the body contains the actual data.
3. **Structure** - Headers consist of metadata in the form of key-value pairs, while the body can contain structured data like HTML, JSON, XML, etc.

# What is Fetch API?

Fetching an API typically involves making an HTTP request to a server, which returns data that your application can use. In web development, this is often done using JavaScript with the Fetch API, which is a modern and powerful way to make requests.

### There are 2 high-level ways a browser can send requests to an HTTP server:

1. **From the browser URL (Default GET request):** When you type a URL into the browser's address bar and press Enter, the browser sends an HTTP GET request to the server. This request is used to retrieve resources like HTML pages, images, or other content.

2. **From an HTML form or JavaScript (Various request types):**
   1. **HTML Forms:** When a user submits a form on a webpage, the browser sends an HTTP request based on the form's `method` attribute, which can be GET or POST. Forms with `method='POST'` typically send data to the server for processing.
   
   2. **JavaScript (Fetch API):** JavaScript running in the browser can make HTTP requests to a server using the Fetch API. These requests can be of various types (GET, POST, PUT, DELETE) and are commonly used for asynchronous data retrieval and manipulation.

#### 2.1 Using the Fetch API

The Fetch API is a promise-based method for making HTTP requests. It works in all modern browsers and is very straightforward to use.

**Eg:** Fetching data from a Public API
```javascript
// URL of the API you want to fetch data from
const apiURL = 'https://api.example.com/data';

// Using fetch to make a GET request to the API
fetch(apiURL)
    .then(response => {
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Parse the JSON data from the response
        return response.json();
    })
    .then(data => {
        // Handle the data you fetched from the API
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('There has been a problem with your fetch operation:', error);
    });
```

#### 2.2 Fetching with `async/await`

Using `async/await` can make your code more readable, especially when dealing with multiple asynchronous operations.

**Eg:** Fetching data with async/await
```javascript
// Async function to fetch data
async function fetchData() {
    try {
        // Await the fetch call
        const response = await fetch('https://api.example.com/data');
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Await the parsing of JSON
        const data = await response.json();
        
        // Handle the data
        console.log(data);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
}

// Call the async function
fetchData();
```

#### 2.3 Fetching with Axios Library

**Eg:**
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.6/axios.min.js"></script>
</head>

<body>
    <div id="posts"></div>
    <script>
        async function fetchPosts() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            document.getElementById("posts").innerHTML = res.data.title;
        }
        fetchPosts();
    </script>
</body>
</html>
```

#### 2.4 Fetching with a POST request

When you need to send data to an API, you can use the Fetch API with a POST request.

**Eg:**
```javascript
const apiURL = 'https://api.example.com/data';
const data = {
    username: 'exampleUser',
    password: 'examplePass'
};

fetch(apiURL, {
    method: 'POST', // or 'PUT', 'DELETE', etc.
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // Convert data to JSON string
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

# What are Query Parameters?

Query parameters are a way to pass data to the server as part of a URL. They are added to the end of a URL after a question mark (?) and are separated by an ampersand (&) if there are multiple parameters.

**Eg:**
```javascript
// URL with query parameters
const url = 'https://example.com/search?query=javascript&page=2';

// Parsing query parameters in JavaScript
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query'); // 'javascript'
const page = urlParams.get('page');   // '2'

console.log(query); // Outputs: javascript
console.log(page);  // Outputs: 2
```
Here, `query=javascript` and `page=2` are the query parameters. They allow the server to know what term to search for and which page of results to display.

# What is `parseInt`?

The `parseInt` function in JavaScript is used to convert a string to an integer.

**Eg:**
The string "25" is converted to the integer 25. The second argument "10" specifies that the string should be interpreted as a base-10 number.
```javascript
const ageInput = '25';
const age = parseInt(ageInput, 10);

console.log(age); // Outputs: 25 (as a number)
```

# Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

**Eg:**
```javascript
const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
}

app.use(myLogger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);
```
