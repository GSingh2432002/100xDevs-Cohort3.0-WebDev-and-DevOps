# What are Custom Hooks?

Custom hooks in React are a powerful feature that allows you to encapsulate and reuse stateful logic across different components. They are essentially JavaScript functions that can use React hooks internally. By creating custom hooks, you can abstract away complex logic, making your components cleaner and more manageable.

---

## Why Use Custom Hooks?

1. **Reusability**: If you find yourself using the same logic in multiple components, a custom hook can help you avoid code duplication.
2. **Separation of Concerns**: They allow you to separate business logic from UI logic, making your components more focused and easier to understand.

---

## Example Code

```javascript
import { useState } from "react";

// Defines a custom hook named useCounter. Custom hooks are functions that let you reuse logic across components.
function useCounter() {
  // Initializes a state variable count with an initial value of 0.
  // count: Holds the current state value. setCount: Updates the value of count.
  const [count, setCount] = useState(0);

  // A function to increment the value of count by 1. It uses setCount to update the state.
  function increaseCount() {
    setCount(count + 1);
  }

  // Returns an object containing count and increaseCount so they can be accessed wherever the hook is used.
  return {
    count: count,
    increaseCount: increaseCount,
  };
}

function App() {
  // Destructures the object returned by useCounter() into count and increaseCount.
  // count: Holds the current value of the counter. increaseCount: Reference to the function that increments the counter.
  const { count, increaseCount } = useCounter();

  return (
    <>
      {/* Renders a button. The onClick handler triggers increaseCount, incrementing count. */}
      {/* Displays the current value of count next to the "Increase" text on the button. */}
      <button onClick={increaseCount}>Increase {count}</button>
    </>
  );
}

export default App;
```