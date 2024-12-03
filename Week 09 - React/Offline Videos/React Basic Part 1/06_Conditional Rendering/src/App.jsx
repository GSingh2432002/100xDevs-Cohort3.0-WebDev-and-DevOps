import React, { useState } from "react";

function App() {
  // isLoggedIn: A state variable to track if the user is logged in (true) or not (false). setIsLoggedIn: A function to update the value of isLoggedIn. useState(false): Initializes isLoggedIn to false (the user starts as logged out).
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // toggleLogin: A function to toggle the login state. setIsLoggedIn((prevState) => !prevState): prevState: Represents the current value of isLoggedIn. Updates isLoggedIn to the opposite of its current value (e.g., true becomes false and vice versa).
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the App!</h1>

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <div>
          <h2>Hello, Sir!</h2>
          <button onClick={toggleLogin} style={buttonStyle}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Please log in to continue.</h2>
          <button onClick={toggleLogin} style={buttonStyle}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default App;
