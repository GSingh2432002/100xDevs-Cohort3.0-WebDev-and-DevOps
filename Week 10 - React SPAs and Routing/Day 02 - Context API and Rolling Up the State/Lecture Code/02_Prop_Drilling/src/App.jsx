import { useState } from 'react'
import './App.css'

function App() {
  const [bulbOn, setbulbOn] = useState(false);
  return (
      <div>
        <Light bulbOn={bulbOn} setbulbOn={setbulbOn} />
      </div>
  )
}

function Light({bulbOn, setbulbOn}){
  return(
    <div>
      <LightBulb bulbOn={bulbOn} />
      <LightSwitch setbulbOn={setbulbOn} />
    </div>
  )
}

function LightBulb({bulbOn}){
  return(
    <div>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </div>
  )
}

function LightSwitch({setbulbOn}){

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
