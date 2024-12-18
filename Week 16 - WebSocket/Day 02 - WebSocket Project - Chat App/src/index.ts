import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({
    port: 8080
})

let allSocket: WebSocket[] = [];

wss.on("connection", function(socket) {
    console.log("Client Connected");

    allSocket.push(socket);

    socket.on("message", function(message){
        console.log("Message Received: ", message);
        allSocket.forEach(s => {
            s.send(message.toString());
        })
    })

    socket.on("disconnect", function(){
        console.log("client disconnected");
        allSocket = allSocket.filter(s => s !== socket);
    })
})