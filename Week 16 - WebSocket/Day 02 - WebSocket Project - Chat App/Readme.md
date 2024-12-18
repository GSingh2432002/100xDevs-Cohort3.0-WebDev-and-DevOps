What is Web Socket?
The websocket class represents a single WebSocket connection between client and a server. It is used to establish a WebSocket connection from the client side or iteract with an individual WebSocket connection on server side.
    
    Usage:
        1. Allows you to manage communication with a single client.
        2. Send and receive message over the connection.

            Example Code: Using WebSocket on the client side to connect to a WebSocket server.
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

What is WebSocket Server?
The WebSocketServer class creates a server-side WebSocket instance that listens for incoming WebSocket connections from clients. It handles multiple WebSocket connections at the same time.

    Usage:
        1. Accepts connections from multiple clients.
        2. Manages and broadcasts messages to clients.
        3. Provide methods to listen for connection events, messages, and client disconnections.

            Example Code:
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

3. How they work together?
    1. WebSocketServer:
        i. Creates the WebSocket server and listens for connections from clients.
        ii. When a client connects, it provides a WebSocket instance for that connection.
    
    2. WebSocket:
        i. Represents the connection with an individual client.
        ii. Used for communication (sending/receiving messages) with that specific client.

5. 

6. What is `wss.on("connection", function(socket)){})`;
The `wss.on("connection", function(socket)){})` is an event listener in a WebSocket server that listens for new client connections. This code is part of the WebSocket Server API, and it triggers a callback function whenever a client establishes a WebSocket connection with the server.
    1. wss: Refers to the WebSocket Server instance created using new WebSocketServer().
    2. .on("connection", ...): 
        i. The connection event is emitted when a client successfully connects to the WebSocket server.
        ii. It allows the server to perform actions specific to that new client connection, such as:
            a. Sending a welcome message.
            b. Broadcasting the new client's presence to other clients.
            c. Setting up message listeners for communication with the client.

    3. function(socket) {...}:
        i. The callback function executed for each new connection.
        ii. The socket parameter represents the WebSocket connection instance between the server and the newly connected client.
        iii. This socket object is used to:
            a. Send data to the client using socket.send()
            b. Listen for incoming messages using socket.on("message", ...)
            c. Handle connection closure using socket.on("close", ...)

                Key Events Inside the Callback:-
                    Send Data to the Client
                        socket.send("Hello Client!");
                            Sends a message to the newly connected client.

                    Listen for Messages from the Client
                        socket.on("message", function(message) {
                            console.log("Received message:", message);
                        });
                            Sets up a listener to process any messages sent by the client.

                    Handle Disconnection
                        socket.on("close", function() {
                            console.log("Client disconnected.");
                        });
                            Triggers when the client disconnects from the server.

7. What is socket.send?
The socket.send method is part of the WebSocket API and is used to send the data from the server to a connected client over a WebSocket connection.

    Purpose:
        It enables bidirectional, real-time communication between the server and the client. When you call socket.send, the data is transmitted over the WebSocket connection to the specific client represented by the socket.

            Example Code:
                socket.send("Hello, Client!", (err) => {
                    if (err) {
                        console.error("Error while sending:", err);
                    } else {
                        console.log("Message sent successfully!");
                    }
                });

8. What is socket.on?
The socket.on method is used to listen for specific events emitted by a WebSocket object (socket) in a WebSocket connection. It allows you to executed a callback function when a certain predefined events occur, such as when a message is received or the connection is closed.

    Syntax: 
        socket.on(eventName, callbackFunction);

            Parameters:
                1. eventName:
                    The name of the event to listen for. Common WebSocket events include:
                        "message": Triggered when a message is received from the connected client/server.
                        "close": Triggered when the connection is closed.
                        "error": Triggered when an error occurs in the WebSocket connection.
                        "open": Triggered when the WebSocket connection is established (on the client side only).
                2. callbackFunction:
                    The function to execute when the specified event occurs. The function typically receives event-specific data as arguments.

                Common Events and Their Usage:
                1. "message"
                Triggered when a message is received through the WebSocket connection.
                    socket.on("message", (message) => {
                        console.log("Message received:", message.toString());
                    });
                        * message: The data sent by the client/server, which can be a string, Buffer, or other types.
                    
                2. "close"
                Triggered when the WebSocket connection is closed by the client or server.
                    socket.on("close", () => {
                        console.log("Connection closed.");
                    });

                3. "error"
                Triggered when there is an error in the WebSocket connection.
                    socket.on("error", (err) => {
                        console.error("Error occurred:", err);
                    });

                4. "connection" (Server-Side Only)
                Triggered when a new client connects to the WebSocket server.
                    server.on("connection", (socket) => {
                        console.log("New client connected!");
                    });

Analogy: Think of socket.on as a "listener" or "subscriber"
    1. "message" : "Whenever someone sends me a message, I want to handle it like this..."
    2. "close" : "Whenever someone disconnects, I need to do this..."