import { useState } from 'react';
import './App.css';

// Defining a functional component named 'App'.
function App() {
  // Declaring a state variable 'count' initialized to 0 and its setter function 'setCount' using the useState hook.
  const [count, setCount] = useState(0);

  // Defining a function that handles the button click event.
  function onClickHandler(){
    // Updating the state 'count' by incrementing its value by 1.
    setCount(count + 1);
  }

  return (
    // Defining the main container div element that holds the content of the App component
    <div className='container'>

      {/*A button element with an onClick event handler that trriggers the onClickHandler function when clicked.*/}
      <button className='center_button' onClick={onClickHandler}>

      {/*Displaying the current value of the count state inside the button element*/}
      Counter {count}
      </button>

    </div>
  );
}

export default App;
