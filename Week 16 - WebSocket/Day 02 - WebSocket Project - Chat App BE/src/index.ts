import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({
    port: 8080
})

interface User {
    socket: WebSocket;
    room: string;
}

let allSocket: User[] = [];

wss.on("connection", function(socket) {
    socket.on("message", function(message) {
    // @ts-ignore
    const parsedMessage = JSON.parse(message);
    
    if (parsedMessage.type === "join"){
        allSocket.push({
            socket,
            room: parsedMessage.payload.roomId
        })
    }

    if (parsedMessage.type === "chat"){
        let currentUserRoom = null;
        for (let i=0; i<allSocket.length; i++){
            if (allSocket[i].socket === socket){
                currentUserRoom = allSocket[i].room;
            }
        }

        for (let i=0; i<allSocket.length; i++){
            if (allSocket[i].room === currentUserRoom){
                allSocket[i].socket.send(parsedMessage.payload.message);
            }
        }
    }
    })
})