// Class Based Component
import React, { Component } from 'react';

class ClassCounter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}


// Functional Based Component
import React, { useState } from 'react';

const FuntionalCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default FuntionalCounter;