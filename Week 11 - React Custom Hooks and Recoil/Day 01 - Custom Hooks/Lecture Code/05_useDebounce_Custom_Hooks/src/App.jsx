import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

// Creates a custom hook to debounce a value (delay updating it to prevent rapid changes). value: The input value to debounce. delay: The time (in milliseconds) to wait before updating the debounced value. debouncedValue: The state variable to store the debounced version of value.
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Runs the debouncing logic whenever value or delay changes. setTimeout: Delays updating debouncedValue until delay milliseconds have passed since value was last updated. Cleanup function (clearTimeout): Cancels the timeout if the component re-renders or value/delay changes, preventing multiple timeouts.
  useEffect(() => {
      const handler = setTimeout(() => {
          setDebouncedValue(value);
      }, delay);

      return () => {
          clearTimeout(handler);
      };
  }, [value, delay]);

  // Returns the debounced value to the component.
  return debouncedValue;
};

function App() {
  // inputVal: Stores the user input from the text box. setInputVal: Updates inputVal as the user types. debounceValue: Stores the debounced version of inputVal, delayed by 200 milliseconds.
  const [inputVal, setInputVal] = useState("");
  const debounceValue = useDebounce(inputVal, 200)

  // Updates inputVal with the current text entered by the user.
  function change(e){
    setInputVal(e.target.value);
  }

  // Triggers when debounceValue changes (not inputVal, thanks to the debounce). Simulates an "expensive operation" (e.g., making an API call or heavy computation) by logging to the console. The debounce ensures that this operation is not triggered on every keystroke, but only after 200 milliseconds of inactivity.
  useEffect(() => {
    console.log("Expensive Operation");
    
  }, [debounceValue])

  return (
    <>
      {/* Renders a text input field. Attaches the change handler to the onChange event, updating inputVal on user input. */}
      <input type='text' onChange={change}></input>
    </>
  )
}

export default App
