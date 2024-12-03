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
In React, lifecycle events (or lifecycle methods) refer to the specific points in a component's life where you can execute code in response to changes or actions. These events help you manage tasks such as data fetching, subscriptions, and cleaning up resources.

- **Class Components**: `componentWillUnmount` runs before unmounting.

#### Example:
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

- **Functional Components**: Return a cleanup function in `useEffect`.

#### Example:
```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated');

  }, [count]); // Runs on mount and when count changes

	useEffect(() => {
		    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
	}, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

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

`useEffect` is a React Hook that lets you perform side effects in functional components.  It can be used for data fetching, subscriptions, or manually changing the DOM. Examples of side effects include:

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
- **Callback function**: The first argument to useEffect is the effect function, where you put the code that performs the side effect. or Contains the effect function, where you put the code that performs the side effect..
- **Cleanup function (optional)**: If your side effect needs cleanup (e.g., unsubscribing from a WebSocket, clearing intervals), useEffect allows you to return a function that React will call when the component unmounts or before re-running the effect. or Runs before the effect re-runs or the component unmounts.
- **Dependency array**: The second argument is the dependencies array, which controls when the effect runs. This array tells React to re-run the effect only when certain values (props or state) change. If you pass an empty array [], the effect will only run once after the initial render. or Determines when the effect runs. An empty array `[]` means the effect runs only once (on mount).


---


## 7. What is `children`?
The `children` prop allows you to pass elements or components as props to other components.

### Example:

```javascript
import React from 'react';

const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>
            <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
};

export default App;
```

---

## 8. What is `List and Keys`?
When rendering `lists`, each item should have a unique `key` prop for React to track changes efficiently.

### Example:

```javascript
import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

const App = () => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    return <ItemList items={items} />;
};
```

---

## 9. What is `Inline Styling`?
`Inline styling` in React allows you to apply CSS styles directly to elements using a JavaScript object

### Example:

```javascript
import './App.css'

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

function MyComponent() {
  return (
    // We are passing style as an object which you can define separately or passing directly in the element.
    <div style={{ backgroundColor: 'blue', color: 'white', fontSize: 28 }}>
      Hello, World!
    </div>
  );
}
export default App
```

---


## 10. What is `Error Boundary`?
`Error boundaries` are React components that catch JavaScript errors in their child component tree and display a fallback UI. Error boundaries only exist in class based components.

### Example:

```javascript
import React from 'react';
import './App.css'

function App() {
  return (
      <div>
        <ErrorBoundary>
          <Card1 />
        </ErrorBoundary>
        
          <Card2 />
      </div>
  )
}

function Card1() {
  throw new Error('I crashed!')
  return (
      <div>
          <h1 style={{ backgroundColor: "aliceblue" }}>Card 1</h1>
      </div>
  )
}

function Card2() {
  return (
      <div>
          <h1 style={{ backgroundColor: "antiquewhite" }}>Card 2</h1>
      </div>
  )
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

export default App
```

---


## 11. What is `Fragment`?
In React, a component can return a single parent element, but it can contain multiple children within that single parent.

### Example:

```javascript
const MyComponent = () => {
    return (
        <>
            <h1>Hello</h1>
            <p>World</p>
        </>
    );
};
```