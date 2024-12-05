// useState: A React hook that manages state in functional components. createContext: A function to create a Context object, enabling state sharing without prop drilling. useContext: A hook to consume the context in a functional component.
import { useState, createContext, useContext } from 'react'
import './App.css'

// createContext(): Creates a Context object (BulbContext) that will be used to share state (bulbOn and setbulbOn) across components without passing props explicitly.
const BulbContext = createContext();

{/*
  const [bulbOn, setbulbOn] = useState(false);

  Initializes a state variable bulbOn with a default value of false.
  setbulbOn is a function to update bulbOn.
  <BulbContext.Provider>

  Wraps child components and provides a context value containing bulbOn and setbulbOn.
  The context value ({ bulbOn, setbulbOn }) will be accessible to all descendants via the useContext hook.
  <Light />

  Renders the Light component, which contains LightBulb and LightSwitch.
*/}
function App() {
  const [bulbOn, setbulbOn] = useState(false);
  return (
      <div>
        <BulbContext.Provider value={{
          bulbOn: bulbOn,
          setbulbOn: setbulbOn
        }}>
        <Light />
        </BulbContext.Provider>
      </div>
  )
}

// Acts as a container for the LightBulb and LightSwitch components.
function Light(){
  return(
    <div>
      <LightBulb  />
      <LightSwitch  />
    </div>
  )
}

{/*
  const { bulbOn } = useContext(BulbContext);

  Uses the useContext hook to access the bulbOn value from BulbContext.
  return Statement

  Conditionally renders "Bulb On" if bulbOn is true, otherwise renders "Bulb Off".
*/}
function LightBulb(){
  const {bulbOn} = useContext(BulbContext);
  return(
    <div>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </div>
  )
}

{/*
  const { setbulbOn } = useContext(BulbContext);

  Uses the useContext hook to access the setbulbOn function from BulbContext.
  function toggle()

  Defines a function to toggle the bulbOn state by inverting the current state.
  <button onClick={toggle}>

  Renders a button. When clicked, the toggle function is called to update the bulbOn state.
*/}
function LightSwitch(){
  const {setbulbOn} = useContext(BulbContext);
  function toggle(){
    setbulbOn(currentState => !currentState)
  }
  return(
    <div>
      <button onClick={toggle}>Toggle the Bulb</button>
    </div>
  )
}

export default App;
