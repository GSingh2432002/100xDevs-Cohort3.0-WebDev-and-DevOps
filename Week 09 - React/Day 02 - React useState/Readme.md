# React Concepts

## 1. What is Rendering in React?
Rendering refers to the process of generating and displaying the visual content of a component or webpage to the user. In the context of React, rendering involves updating the DOM to reflect the current state of your application.

### Types of Rendering:
1. **Initial Rendering**: The first time a React Component is created and added to the DOM.
2. **Re-rendering**: Occurs when the state or props of a component change, causing the component to update and re-render in the DOM.

---

## 2. What is Mounting?
Mounting is when a React component is created and added to the DOM for the first time.

### Lifecycle:
- **Class Components**: The component goes through lifecycle methods such as `componentDidMount`.
- **Functional Components**: `useEffect` with an empty dependency array (`[]`) simulates this behavior.

---

## 3. What is Unmounting?
Unmounting is when a React component is removed from the DOM.

### Why does it happen?
- When a parent component conditionally removes a child component.
- When navigating away from a route in a single-page app.

### Lifecycle:
- **Class Components**: `componentWillUnmount` runs before unmounting.
- **Functional Components**: Return a cleanup function in `useEffect`.

---

## 4. What is Dependency Array?
The dependency array in `useEffect` specifies when the effect should run.

### Variations:
- **Empty Array (`[]`)**: Effect runs only once, after the component is mounted.
- **No Array**: Effect runs on every render, which can cause performance issues.
- **With Dependencies**: Effect runs only when specified dependencies change.

#### Example:
```javascript
useEffect(() => {
    console.log("Count changed to:", count);
}, [count]); // Runs only when `count` changes
```

---

## 5. What is Conditional Rendering?
Conditional rendering means displaying content based on a condition.

### Example:
```javascript
// Using ternary operator
return loggedIn ? <Dashboard /> : <Login />;
```

---

## 6. What is useState?
`useState` is a React Hook that allows you to add state management to functional components. It lets your components "remember" values between renders, such as form inputs, counters, or toggle switches.

### Syntax:
```javascript
const [state, setState] = useState(initialValue);
```
### React State Example

- **state**: The current state value.
- **setState**: A function to update the state.
- **initialValue**: The initial value of the state.

### Example:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state with 0

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

---


## 6. What is `useEffect`?

`useEffect` is a React Hook that lets you perform side effects in functional components. Examples of side effects include:

- Fetching data from an API.
- Subscribing to events.
- Modifying the DOM directly.
- Setting up or cleaning up timers.

### Syntax:

```javascript
useEffect(() => {
  // Code to run on render
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```
- **Callback function**: Contains the logic to execute as a side effect.
- **Cleanup function (optional)**: Runs before the effect re-runs or the component unmounts.
- **Dependency array**: Determines when the effect runs. An empty array `[]` means the effect runs only once (on mount).

