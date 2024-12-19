### Setting Up a TypeScript Project with WebSockets

Follow these steps to set up a TypeScript project using `ws` (WebSocket library):

1. **Initialize the Project**:
   ```bash
   npm init -y
   ```

2. **Add a Script to `package.json`**:
   Update the `scripts` section of your `package.json` file to include the following:
   
   ```json
   "scripts": {
       "dev": "tsc -b && node ./dist/index.js"
   }
   ```

3. **Install TypeScript**:
   ```bash
   npm i typescript
   ```

4. **Initialize TypeScript Configuration**:
   ```bash
   npx tsc --init
   ```

   This will generate a `tsconfig.json` file for TypeScript configuration.

5. **Install WebSocket Library and Type Definitions**:
   ```bash
   npm i ws @types/ws
   ```

6. **Run the Project**:
   Start the development server with the following command:
   ```bash
   npm run dev
   ```

---
### Summary
- `tsc -b`: Builds the TypeScript project.
- `node ./dist/index.js`: Runs the compiled JavaScript output.
- `ws`: WebSocket library for Node.js.
- `@types/ws`: TypeScript definitions for the `ws` library.

---
# 1. What is WebSocket?

The WebSocket class represents a single WebSocket connection between a client and a server. It is used to establish a WebSocket connection from the client side or interact with an individual WebSocket connection on the server side.

### **Usage**:
1. Allows you to manage communication with a single client.
2. Send and receive messages over the connection.

#### Example Code: Using WebSocket on the client side to connect to a WebSocket server.
```javascript
const WebSocket = require("ws");

const socket = new WebSocket("ws://localhost:8080");

socket.on("open", () => {
    console.log("Connected to the server!");
    socket.send("Hello, Server!");
});

socket.on("message", (message) => {
    console.log("Message from server:", message.toString());
});

socket.on("close", () => {
    console.log("Disconnected from the server.");
});
```

---
### 2. What is WebSocket Server?

The WebSocketServer class creates a server-side WebSocket instance that listens for incoming WebSocket connections from clients. It handles multiple WebSocket connections at the same time.

### **Usage**:
1. Accepts connections from multiple clients.
2. Manages and broadcasts messages to clients.
3. Provides methods to listen for connection events, messages, and client disconnections.

#### Example Code:
```javascript
const { WebSocketServer } = require("ws");

// Create a WebSocket server listening on port 8080
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
    console.log("Client connected!");

    // Send a message to the client
    socket.send("Welcome to the WebSocket server!");

    // Listen for messages from the client
    socket.on("message", (message) => {
        console.log("Message from client:", message.toString());
    });

    // Handle client disconnection
    socket.on("close", () => {
        console.log("Client disconnected.");
    });
});
```

---
### 3. How They Work Together

1. **WebSocketServer**:
   - Creates the WebSocket server and listens for connections from clients.
   - When a client connects, it provides a WebSocket instance for that connection.

2. **WebSocket**:
   - Represents the connection with an individual client.
   - Used for communication (sending/receiving messages) with that specific client.

---
### 4. What is `wss.on("connection", function(socket))`?

The `wss.on("connection", function(socket))` is an event listener in a WebSocket server that listens for new client connections. This code is part of the WebSocket Server API, and it triggers a callback function whenever a client establishes a WebSocket connection with the server.

### **Explanation**:
1. **`wss`**: Refers to the WebSocket Server instance created using `new WebSocketServer()`.
2. **`.on("connection", ...)`**: 
   - The `connection` event is emitted when a client successfully connects to the WebSocket server.
   - It allows the server to perform actions specific to that new client connection, such as:
     - Sending a welcome message.
     - Broadcasting the new client’s presence to other clients.
     - Setting up message listeners for communication with the client.

3. **`function(socket) {...}`**:
   - The callback function executed for each new connection.
   - The `socket` parameter represents the WebSocket connection instance between the server and the newly connected client.
   - This `socket` object is used to:
     - Send data to the client using `socket.send()`.
     - Listen for incoming messages using `socket.on("message", ...)`.
     - Handle connection closure using `socket.on("close", ...)`.

#### Key Events Inside the Callback:
- **Send Data to the Client**:
    ```javascript
    socket.send("Hello Client!");
    ```
    Sends a message to the newly connected client.

- **Listen for Messages from the Client**:
    ```javascript
    socket.on("message", function(message) {
        console.log("Received message:", message);
    });
    ```
    Sets up a listener to process any messages sent by the client.

- **Handle Disconnection**:
    ```javascript
    socket.on("close", function() {
        console.log("Client disconnected.");
    });
    ```
    Triggers when the client disconnects from the server.

---
### 5. What is `socket.send`?

The `socket.send` method is part of the WebSocket API and is used to send data from the server to a connected client over a WebSocket connection.

### **Purpose**:
It enables bidirectional, real-time communication between the server and the client. When you call `socket.send`, the data is transmitted over the WebSocket connection to the specific client represented by the `socket`.

#### Example Code:
```javascript
socket.send("Hello, Client!", (err) => {
    if (err) {
        console.error("Error while sending:", err);
    } else {
        console.log("Message sent successfully!");
    }
});
```

---
### 6. What is `socket.on`?

The `socket.on` method is used to listen for specific events emitted by a WebSocket object (`socket`) in a WebSocket connection. It allows you to execute a callback function when certain predefined events occur, such as when a message is received or the connection is closed.

### **Syntax**: 
```javascript
socket.on(eventName, callbackFunction);
```

#### **Parameters**:
1. **`eventName`**:
   The name of the event to listen for. Common WebSocket events include:
   - `"message"`: Triggered when a message is received from the connected client/server.
   - `"close"`: Triggered when the connection is closed.
   - `"error"`: Triggered when an error occurs in the WebSocket connection.
   - `"open"`: Triggered when the WebSocket connection is established (on the client side only).

2. **`callbackFunction`**:
   The function to execute when the specified event occurs. The function typically receives event-specific data as arguments.

#### **Common Events and Their Usage**:
1. **`"message"`**:
   Triggered when a message is received through the WebSocket connection.
    ```javascript
    socket.on("message", (message) => {
        console.log("Message received:", message.toString());
    });
    ```
   - **`message`**: The data sent by the client/server, which can be a string, Buffer, or other types.

2. **`"close"`**:
   Triggered when the WebSocket connection is closed by the client or server.
    ```javascript
    socket.on("close", () => {
        console.log("Connection closed.");
    });
    ```

3. **`"error"`**:
   Triggered when there is an error in the WebSocket connection.
    ```javascript
    socket.on("error", (err) => {
        console.error("Error occurred:", err);
    });
    ```

4. **`"connection"`** (Server-Side Only):
   Triggered when a new client connects to the WebSocket server.
    ```javascript
    server.on("connection", (socket) => {
        console.log("New client connected!");
    });
    ```

#### Analogy:
Think of `socket.on` as a "listener" or "subscriber":
- **`"message"`**: "Whenever someone sends me a message, I want to handle it like this..."
- **`"close"`**: "Whenever someone disconnects, I need to do this..."