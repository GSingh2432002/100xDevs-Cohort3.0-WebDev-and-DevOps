import { useState } from 'react'
import './App.css'
import { usePrev } from "./hooks/usePrev"

function App() {
  // state: A state variable initialized to 0. setState: Function to update the value of state.
  const [state, setState] = useState(0);

  // Calls the usePrev hook with the current state value. usePrev returns the previous value of state and stores it in prev.
  const prev = usePrev(state);

  {/*
  Current State (state):

  Displays the current value of state inside a <p> tag.
  Button:

  Clicking the button triggers setState, which increments state by 1.
  Previous State (prev):

  Displays the previous value of state (as tracked by usePrev) inside another <p> tag.
*/}
  return (
    <>
      <p>{state}</p>
      <button onClick={() => {
        setState((curr) => curr + 1);
      }}>Click Me</button>
      <p>The Previous value was {prev}</p>
    </>
  );
}

export default App
