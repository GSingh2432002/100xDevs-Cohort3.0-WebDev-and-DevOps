import { useState } from "react";
import "./App.css";

function App() {
  return(
    <>
      <Counter/>
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <>
      <CurrentCount count={count}/>
      <Increase setCount={setCount} count={count}/>
      <Decrease setCount={setCount} count={count}/>
    </>
  )
}

function CurrentCount({count}){
  return(
    <>
      {count}
    </>
  )
}

function Increase({setCount, count}){
  function increaseCount(){
    setCount(count + 1);
  }
  return(
    <>
      <button onClick={increaseCount}>+</button>
    </>
  )
}

function Decrease({setCount, count}){
  function decreaseCount(){
    setCount(count - 1);
  }
  return(
    <>
      <button onClick={decreaseCount}>-</button>
    </>
  )
}

export default App;
