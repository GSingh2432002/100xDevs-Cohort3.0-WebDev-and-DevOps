## 1. What is `recoil`?

`recoil` is a state management library for React that provides a way to manage global state with fine-grained control. It minimizes unnecessary renders by only re-rendering components that depend on changed atoms. The performance of a React app is measured by the number of re-renders, and each re-render is expensive, so minimizing them is essential.

### Key Concepts in `recoil`

- **Atoms:** Units of state that can be read from and written to from any component.
- **Selectors:** Functions that derive state from atoms or other selectors, allowing for computed state.


---


## 2. What is `Atom`?

Atoms are units of state that can be read from and written to from any component. When an atom’s state changes, all components that subscribe to that atom will re-render.

### Example Code

#### Wrap the app inside a `RecoilRoot`
```javascript
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <Counter />
        </RecoilRoot>
    );
}
```

#### Create a Counter Atom
```javascript
const counter = atom({
    key: "counter", // A unique identifier for the atom
    default: 0, // The initial value of the atom
});
```

#### Create a `Buttons` Component
```javascript
function Buttons() {
    const setCount = useSetRecoilState(counter); // Hook to update the value of the counter atom

    function increase() {
        setCount(c => c + 1); // Increments the counter value by 1
    }

    function decrease() {
        setCount(c => c - 1); // Decrements the counter value by 1
    }

    return (
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}
```

#### Use the Counter Atom
```javascript
function Counter() {
    const count = useRecoilValue(counter); // Hook to retrieve the current value of the counter atom

    return (
        <div>
            {count} {/* Displays the current value of the counter */}
            <Buttons /> {/* Renders the Buttons component for interacting with the counter */}
        </div>
    );
}
```

---


## What is `memo`?

`memo` is a higher-order component in React that allows you to optimize performance by skipping the re-rendering of a component when its props remain unchanged. This is useful because, by default, when a parent component re-renders, all its child components also re-render, even if their props are the same.

### Example Code
```javascript
import { memo } from 'react';

const Buttons = memo(function () {
    const setCount = useSetRecoilState(counter);

    function increase() {
        setCount(c => c + 1); // Increment the counter
    }
    
    function decrease() {
        setCount(c => c - 1); // Decrement the counter
    }
    
    return (
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
});
```

---

## 4. What is `Selector`?

A **selector** represents a piece of **derived state**. Derived state is the result of applying a pure function to existing state, enabling the creation of dynamic data that depends on other data. This allows for reusable logic and avoids duplicating state computations across components.

### Example Code

#### Add a Selector
```javascript
const even = selector({
    key: 'isEven', // A unique identifier for the selector
    get: ({ get }) => {
        const count = get(counter); // Retrieve the current value of the counter atom
        return count % 2 === 0; // Compute if the counter is even
    },
});
```

#### Add an `IsEven` Component
```javascript
function IsEven() {
    const isEven = useRecoilValue(even); // Hook to get the derived state from the `even` selector

    return (
        <div>
            {isEven ? "Even" : "Odd"} {/* Renders "Even" if true, "Odd" otherwise */}
        </div>
    );
}
```
        ​
#### Change the `increase` Function
```javascript
function increase() {
    setCount(c => c + 2); // Increments the counter by 2 instead of 1
}
```

---


### Note:
React says that anytime a component re-renders, all its children also re-render. However, if you wrap a component inside `memo`, it will only re-render if the props or state in that child have changed. This can help optimize performance by preventing unnecessary re-renders of child components that receive the same props.
