// import './App.css'

import { useState, useEffect } from "react"

// Conditional Rendering
function App() {
  // let [counterVisible, setCounterVisible] = useState(true);
  // useEffect(function() {
  //   setInterval(function() {
  //     setCounterVisible(c => !c)
  //   }, 5000);
  // }, [])

  // useEffect, dependency array, cleanup function
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount2(count2 - 1);
  }

  return (
      // <div>
      //   hello 
      //   {counterVisible && <Counter></Counter>}
      //   harkirat bhaiya
      // </div>
      <div>
        <Counter count={count} count2={count2}/>
        <button onClick={increase}>Home</button>
        <button onClick={decrease}>About</button>
      </div>
  )
}
// // Mounting, re-rendering and Unmounting
// function Counter(){
//   // We cannot use raw variables in React and put them in dynamic part of your component.
//   // let count = 0;
//   // function increaseCount(){
//   //   count++;
//   // }

//   // We use state variables in React to make our components dynamic.
//   // React says I will rerender your application when you change the state variable.
//   // For dynamic part of your Component, we have to convert this into state variable with the help of use state hook like this:
//   // const [count, setCount] = useState(0);
//   // function increaseCount(){
//   //   setCount(count + 1);
//   // }

//   // const [count, setCount] = useState(0);
//   // // Hooking into the lifecycle events of React
//   // // Log all the time when the component is re-rendered
//   // console.log("Counter");  
//   // //gaurd our setInterval from re-rendering
//   // useEffect(function(){
//   //   setInterval(function(){
//   //     setCount(function(count){
//   //       return count + 1;
//   //     })
//   //   }, 1000)
//   //   // Log only once when the component is mounted
//   //   console.log("Component Mounted");    
//   // }, []);

//   const [count, setCount] = useState(0);
//   useEffect(function(){
//     console.log("Component Mounted");
//     let clock = setInterval(function(){
//       console.log("Inside setInterval");
//       setCount(c => c + 1);
//     }, 1000);

//     return function(){
//       console.log("Component Unmounted");
//       clearInterval(clock);
//     }   
//   }, []);
//   return(
//     <div>
//       <h1 id="text">{count}</h1>
//       {/* <button onClick={increaseCount}>Increase Count</button> */}

//     </div>
//   )
// }
// export default App;

// Mounting, re-rendering and Unmounting
function Counter(props){
  useEffect(function(){
    console.log("Component Mounted");

    return function(){
      console.log("Component Unmounted");
    }
  }, []); // Without dependency array. It will run only once when the component is mounted and unmounted.

  useEffect(function(){
    console.log("Count has changed");
    
    // Cleanup function inside useEffect with dependency array.
    return function(){
      console.log("Clean up inside second effect");      
    }    
  }, [props.count]); // With dependency array. It will run whenever the count changes and unmounted.

  return <div>
    counter1 {props.count} <br/>
    counter2 {props.count2}
  </div>
}
export default App;

// Note:- So basically the code we write in useEffect is used at the time of mounting and ignored at the time of re-rendering and the funtion we return in useEffect is called at the time of unmounting.