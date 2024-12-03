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
