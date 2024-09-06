# State Derived Frontends
To make frontends easier to code, the concept of state came into the picture. You will see this more when we reach React.

## There are three jargon we need to understand
1. **State** - The variable parts of an app.
2. **Components** - How to render state on screen.
3. **Rendering** - Taking the state and rendering it on the DOM based on the components.

### A Website contains a state and Component:
A state object is where you store property values that belong to the component. When the state object changes, the component re-renders.

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

#### Example:
**State:**
```javascript
const todos = [
  { id: 1, description: "Go to gym" },
  { id: 2, description: "Eat food" }
];
```

**Component:**
```javascript
function todoComponent(todo) {
  const div = document.createElement("div");
  const h1 = document.createElement("button");
  const button = document.createElement("button");
  
  button.innerHTML = "Delete";
  h1.innerHTML = todo.title;
  
  div.appendChild(h1);
  div.appendChild(button);
}
```
