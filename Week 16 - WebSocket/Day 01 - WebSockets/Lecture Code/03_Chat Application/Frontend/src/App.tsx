import './App.css'
import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();
  function sendMessage() {
    // @ts-ignore
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message);      
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    // @ts-ignore
    setSocket(ws)

    ws.onmessage = (event) => {
      alert(event.data)
    }
  }, []);
  return (
    <>
      <div>
        <h1>Ping Pong</h1>
        <input  ref={inputRef} style={{marginRight: "10px",height:"45px", borderRadius: "10px", width: "200px", fontWeight: "bold"}} type='text' placeholder='Message...'></input>
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
