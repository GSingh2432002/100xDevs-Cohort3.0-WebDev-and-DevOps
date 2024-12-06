import { useState } from "react"

// Defines a custom hook named useCounter. Custom hooks are functions that let you reuse logic across components.
function useCounter(){
  // Initializes a state variable count with an initial value of 0. count: Holds the current state value. setCount: Updates the value of count.
  const [count, setCount] = useState(0);

  // A function to increment the value of count by 1. It uses setCount to update the state.
  function increaseCount(){
    setCount(count + 1);
  }
  
  // Returns an object containing count and increaseCount so they can be accessed wherever the hook is used.
  return{
    count: count,
    increaseCount: increaseCount
  }
}

function App() {
  // Destructures the object returned by useCounter() into count and increaseCount. count: Holds the current value of the counter. increaseCount: Reference to the function that increments the counter.
  const {count, increaseCount} = useCounter();
  return (
    <>
      {/* Renders a button. The onClick handler triggers increaseCount, incrementing count. Displays the current value of count next to the "Increase" text on the button. */}
      <button onClick={increaseCount}>Increase {count}</button>
    </>
  )
}

export default App
