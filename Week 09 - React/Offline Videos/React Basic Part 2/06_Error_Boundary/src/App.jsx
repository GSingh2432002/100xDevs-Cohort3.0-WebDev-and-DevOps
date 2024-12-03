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
