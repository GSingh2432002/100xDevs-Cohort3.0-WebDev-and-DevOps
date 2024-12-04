// useState: A React hook to manage state in functional components. It allows components to "remember" values across renders. useRef: A React hook used to store a mutable value that persists across renders without triggering re-renders.
import { useState, useRef } from "react"

function App() {
// currentCount: A state variable initialized with 1. It keeps track of the current count. setcurrentCount: A function to update the value of currentCount. When setcurrentCount is called, React re-renders the component, displaying the updated value of currentCount.
  const [currentCount, setcurrentCount] = useState(1);
  // This value get over-ridden and it is re-initialized on every render.
  // let timer = 0;
  // In place of raw variable we use useref to store the variable such that it is not changing anything in the DOM.
  // ref: A reference object initialized as undefined. Purpose: Stores a mutable value (ref.current) that persists across renders. In this code, it's used to store the interval ID created by setInterval so it can be cleared later using clearInterval.
  const ref = useRef();

  function StartClock(){
    // setInterval: Starts a timer that executes the callback function every 1000ms (1 second). The callback increments the current count using the state updater setcurrentCount.
    let value = setInterval(function(){
      // setcurrentCount((c) => c + 1): Uses the functional updater form to increment the count. The function ensures the previous state value is correctly updated, even with asynchronous updates.
      setcurrentCount(c => c + 1);
    }, [1000]);
    // Stores the interval ID (value) returned by setInterval in the ref object. This allows the interval to be cleared later.
    ref.current = value;
  }

  function StopClock(){
    // clearInterval(ref.current): Stops the timer associated with the interval ID stored in ref.current. Ensures the clock stops incrementing currentCount.
    clearInterval(ref.current);
  }

  return (    
    <>
      {currentCount}
      <button onClick={StartClock}>Start</button>
      <button onClick={StopClock}>Stop</button>
    </>
  )
}

export default App;
