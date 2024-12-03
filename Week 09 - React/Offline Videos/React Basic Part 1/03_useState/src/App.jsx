// useState is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it.
import { useState } from "react";

// Defines the main functional Component of the App
function App() {

  return (
    <div style={{ backgroundColor: "rgba(120, 156, 207, 1)", height: "100vh" }}>

      {/* Renders the Counter Component */}
      <Counter />
      
      {/* Renders the ToggleMessage Component */}
      <ToggleMessage />
    </div>
  )
}

// Create a function called counter to render it in the App component
const Counter = () => {
  // Declares the Counter Component using a arrow function. Initializes the count with 0, count stores the current state value and setCount is a function that updates the count value.
  const [count, setCount] = useState(0);
  function increment(){
    setCount(count + 1);
  }
  function decrement(){
    setCount(count - 1);
  }
  return(
    
    <div style={{ margin: "0px 10px" }}>
      <h2> Count: {count} </h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

// Create a function called ToggleMessage to render it in the App component
const ToggleMessage = () => {
  // Declares the ToggleMessage Component using a arrow function. Initializes the notification with 0, count stores the current state value and setNotification is a function that updates the count value.
  const [notification, setNotification] = useState(0);
  function toggle(){
    setNotification(notification + 1);
  }
  return(
    <div>
      <button onClick={toggle} style={{ padding: "10px", margin: "10px", cursor: "pointer" }}>
        Toggle
      </button>
      {notification}
    </div>
  );
}

export default App;
