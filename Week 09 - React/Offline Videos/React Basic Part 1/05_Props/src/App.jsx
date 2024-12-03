import React from "react";
// Props are the way to pass data from one component to another in React.
const Greeting =({ name}) => {
  return <h1>Hello, {name}</h1>
};

function App() {
  return (
    <div>
      <Greeting name="Alice"/>
      <Greeting name="GKS"/>
    </div>
  )
};

export default App
