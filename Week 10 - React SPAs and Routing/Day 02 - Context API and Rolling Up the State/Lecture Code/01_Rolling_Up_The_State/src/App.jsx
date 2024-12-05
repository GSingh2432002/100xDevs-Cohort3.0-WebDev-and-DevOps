import { useState } from 'react'
import './App.css'

function App() {

  return (
      <div>
        <LightBulb />
      </div>
  )
}

function LightBulb(){
  const [bulbOn, setbulbOn] = useState(true);
  return(
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setbulbOn={setbulbOn} />
    </div>
  )
}

function BulbState({bulbOn}){
  return(
    <div>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </div>
  )
}

function ToggleBulbState({setbulbOn}){

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
