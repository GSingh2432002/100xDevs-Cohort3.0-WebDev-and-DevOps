import { WebSocket, WebSocketServer } from "ws";
const websocketserver = new WebSocketServer({ port: 8080 });

websocketserver.on("connection", function(socket) {
    socket.on("message", (e) => {
        if(e.toString() === "ping") {
            socket.send("pong");
        }
    });
});