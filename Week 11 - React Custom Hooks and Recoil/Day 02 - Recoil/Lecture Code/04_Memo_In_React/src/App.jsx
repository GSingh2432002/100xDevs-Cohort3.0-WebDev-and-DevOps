import "./App.css";
import { useState, useEffect, memo } from "react";

function App() {
  return(
    <>
      <Counter/>
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1);
    }, 3000)
  }, []);

  return(
    <>
      <CurrentCount />
      <Increase />
      <Decrease />
    </>
  )
}

const CurrentCount = memo(function(){
   return(
    <>
      {1}
    </>
  )
})

const Increase = memo(function(){
  function increaseCount(){
  }
  return(
    <>
      <button onClick={increaseCount}>+</button>
    </>
  )
})

const Decrease = memo(function(){
  function decreaseCount(){
  }
  return(
    <>
      <button onClick={decreaseCount}>-</button>
    </>
  )
})

export default App;
