## What is `Rolling Up the State in React`?

`Rolling up the state` in React refers to moving state to a higher-level (parent) component so that it can be shared among multiple child components. This is a common practice when:

1. **Multiple components need to share and interact with the same piece of state.**  
   If two or more sibling components depend on the same state, managing that state in their parent component allows easier sharing and synchronization.

2. **State needs to be lifted for better control.**  
   By centralizing state in a parent component, you avoid duplicating state logic across child components, which could lead to inconsistencies.

### Example Code

```javascript
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setbulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setbulbOn={setbulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return (
    <div>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </div>
  );
}

function ToggleBulbState({ setbulbOn }) {
  function toggle() {
    setbulbOn(currentState => !currentState);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the Bulb</button>
    </div>
  );
}

export default App;
```

---

## What is `Prop Drilling`?

`Prop drilling` occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree.  

In React, **prop drilling** refers to the situation where data (props) needs to be passed through multiple intermediate components that do not use the data themselves, just to reach a deeply nested child component that requires it. This happens when a parent component owns a piece of state and wants to pass it down to a deeply nested child, requiring every intermediate component in the hierarchy to pass the props along, even if they don't need it.

### Example Code

```javascript
import { useState } from 'react';
import './App.css';

function App() {
  const [bulbOn, setbulbOn] = useState(false);
  return (
    <div>
      <Light bulbOn={bulbOn} setbulbOn={setbulbOn} />
    </div>
  );
}

function Light({ bulbOn, setbulbOn }) {
  return (
    <div>
      <LightBulb bulbOn={bulbOn} />
      <LightSwitch setbulbOn={setbulbOn} />
    </div>
  );
}

function LightBulb({ bulbOn }) {
  return (
    <div>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </div>
  );
}

function LightSwitch({ setbulbOn }) {
  function toggle() {
    setbulbOn(currentState => !currentState);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the Bulb</button>
    </div>
  );
}

export default App;
```

---

# What is Context API?

The **Context API** is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components. It provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.

## Jargon

- **Context**: Created using `React.createContext()`. It acts as a container for the data you want to share across components.
- **Provider**: A component that wraps part of your application and provides the context value to all its descendants. Any child component of this Provider can access the context.
- **Consumer**: A component that subscribes to context changes. With the `useContext` hook, you can easily access the context value.

## Example Code

```javascript
import { useState, createContext, useContext } from 'react';
import './App.css';

const BulbContext = createContext();

function App() {
  const [bulbOn, setbulbOn] = useState(false);
  return (
    <div>
      <BulbContext.Provider value={{ bulbOn, setbulbOn }}>
        <Light />
      </BulbContext.Provider>
    </div>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return (
    <div>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </div>
  );
}

function LightSwitch() {
  const { setbulbOn } = useContext(BulbContext);
  function toggle() {
    setbulbOn(currentState => !currentState);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the Bulb</button>
    </div>
  );
}

export default App;
```