# 1. What is WebSocket?

A WebSocket is a communication protocol that provides full-duplex, persistent and bidirectional communication over a single TCP connection. Unlike HTTP, which is stateless and requires repeated requests to maintain communication, WebSocket allows the client and server to send and receive data in real-time without repeatedly establishing a new connection. WebSockets are often used in real-time applications like chat apps, stock trading platforms, online gaming, and live notifications.

### How WebSocket Works:
- **Handshake**: The client initiates the WebSocket handshake by sending an HTTP request with the Upgrade header set to websocket.
- **Connection Established**: If the server accepts the handshake, the protocol switches from HTTP to WebSocket, and a persistent connection is established.
- **Data Exchange**: Both client and server can send data to each other at any time during the connection.
- **Closing**: Either the client or server can close the connection when no longer needed.

### Key Features:
- **Real-Time Communication**: Allows for immediate data exchange without polling.
- **Persistent Connection**: Reduces latency compared to HTTP request-response cycles.
- **Lightweight**: Minimal overhead compared to traditional HTTP-based communication.

### **Use Cases for WebSockets:**
- **Real-Time Applications**: Chat applications, live sports updates, real-time gaming, and any application requiring instant updates can benefit from WebSockets.
- **Live Feeds**: Financial tickers, news feeds, and social media updates are examples where WebSockets can be used to push live data to users.
- **Interactive Services**: Collaborative editing tools, live customer support chat, and interactive webinars can use WebSockets to enhance user interaction.

### Example Code:

#### Server-side (Node.js with ws library):
```javascript
const WebSocket = require('ws');
// Create a WebSocket server
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');

    // Listen for messages from the client
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        
        // Broadcast the message to all connected clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Message from server: ${message}`);
            }
        });
    });

    // Handle connection closure
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
```
#### Client-side (HTML and JavaScript):
```html
<!DOCTYPE html>
<html>
<head>
    <title>WebSocket Chat</title>
</head>
<body>
    <h1>WebSocket Chat</h1>
    <input id="messageInput" type="text" placeholder="Type a message" />
    <button onclick="sendMessage()">Send</button>
    <div id="messages"></div>

    <script>
        // Connect to the WebSocket server
        const socket = new WebSocket('ws://localhost:8080');

        // Display messages from the server
        socket.onmessage = (event) => {
            const messagesDiv = document.getElementById('messages');
            const newMessage = document.createElement('p');
            newMessage.textContent = event.data;
            messagesDiv.appendChild(newMessage);
        };

        // Send a message to the server
        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value;
            socket.send(message);
            input.value = '';
        }
    </script>
</body>
</html>
```
---

### 2. Why not use HTTP/REST? Why do you need WebSockets (ws)?

- **Network Handshake** happens for every request in HTTP, adding overhead.
- **No way to push server-side events**: While polling is possible, it is not efficient or optimal.
- **Reduces bandwidth consumption**: WebSockets are ideal for IoT devices, collaborative apps, and live dashboards.
- **Essential for server-initiated updates**: Scenarios like live notifications, chat messages, or streaming data require the server to actively push updates.
- **Ideal for frequent or constant data exchange**: Unlike HTTP, WebSockets eliminate the repeated overhead of creating and closing connections.
