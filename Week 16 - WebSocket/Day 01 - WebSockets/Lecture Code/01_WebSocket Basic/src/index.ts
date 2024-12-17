// Importing the WebSocket and WebSocketServer classes from the "ws" library
import { WebSocket, WebSocketServer } from "ws";

// Creating a new instance of the WebSocketServer
// The server listens for incoming WebSocket connections on port 8080
const websocketserver = new WebSocketServer({
    port: 8080
});

// Event handler for client connections
// The 'connection' event triggers when a client successfully connects to the server
websocketserver.on("connection", function(socket) {
    console.log("Client Connected"); // Log a message when a client connects

    // Send data to the connected client every 500 milliseconds
    setInterval(() => {
        // Generate a random price and send it to the client using the socket's send method
        socket.send("Current Price of $PENG is " + Math.random());
    }, 500); // Interval time: 500ms

    // Event handler for incoming messages from the client
    socket.on("message", function(message) {
        // Convert the received message to a string and log it to the console
        console.log(message.toString());
    });
});
