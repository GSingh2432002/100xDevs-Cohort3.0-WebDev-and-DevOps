# React Concepts and Examples

---

## 1. What is `SPAs`? 

**Single Page Applications** (SPAs) are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. This approach allows for a smoother user experience compared to traditional multi-page applications (MPAs), where each interaction often requires a full page reload. In the context of React, SPAs are built using React’s component-based architecture and libraries like `react-router-dom` to manage navigation and routing.

- **Library to use for routing**: [React Router](https://reactrouter.com/en/main)

**Example Code**:
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

export default App;
```

---


## 2. What is `BrowserRouter`?

A component from `react-router-dom` that enables client-side routing in React Applications. It uses the HTML5 history API to keep the UI in sync with the URL in the browser's address bar. Wrap your entire application (or the part requiring routing) in a `<BrowserRouter>`.

### Features:
1. Manages the routing context for your application.
2. Ensures navigation occurs without a full-page reload.
3. Automatically updates the URL when navigating.

### Example Code:
```jsx
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>Your App Content</div>
    </BrowserRouter>
  );
}
```

---

## 3. What is `Routes`?

A component that groups all the defined `<Route>` components together. It renders the first child `<Route>` that matches the current URL. Encapsulate all your `<Route>` components within `<Routes>`.

### Features:
1. Ensures that only one route matches at a time.
2. Replaces the older `<Switch>` components within `<Routes>`.

### Example Code:
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}
```

---

## 4. What is `Route`?

A component that defines a mapping between a URL path and a React component. Used within `<Routes>` to configure how your app responds to specific URLs. It maps specific URL paths to React components.

### Features:
1. **path**: The URL pattern to match (e.g., `/about`, `/products/:id`).
2. **element**: The React component to render when the path matches.

### Example Code:
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

function About() {
  return <h1>Learn About Us</h1>;
}
```

---

## 5. What is `Outlet`?

`Outlet` is a component provided by `react-router-dom` that serves as a placeholder for rendering nested routes. It's useful for creating layouts where some parts of the UI (e.g., headers, sidebars) remain constant, while other parts change based on the route.

### How it Works:
1. When a parent route renders an `Outlet`, it displays the child route's component.
2. If no child route matches, the `Outlet` remains empty.

### Example Code:
```jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <header>Header</header>
      <Outlet /> {/* Renders either About or Contact component based on the route */}
      <footer>Footer</footer>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}
```

---

## 6. What is `useNavigate`?

`useNavigate` is a hook provided by `react-router-dom` that allows you to programmatically navigate to a different route.

### Features:
1. You can redirect users without requiring a `Link` or `NavLink` component.
2. Supports pushing new routes or replacing the current route in the history stack.

### Example Code:
```jsx
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function goToAbout() {
    navigate("/about"); // Navigates to the "/about" route
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About Page</button>
    </div>
  );
}
```

---

## 7. What is `Link`?

`Link` is a component in `react-router-dom` that allows navigation between routes without a full-page reload. It generates an anchor `<a>` tag under the hood but manages navigation using React's routing logic.

### Features:
1. Prevents unnecessary page reloads, making navigation seamless.
2. Accessible with keyboard navigation and screen readers.

### Example Code:
```jsx
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

---

## 8. What is `Layout`?

A layout in React refers to a reusable component that provides a consistent design for a web application. It typically includes common UI elements like headers, footers, sidebars, or navigation bars, which remain constant across multiple pages or views, while the main content changes based on the route or context. Layouts let you wrap every route inside a certain component (think headers and footers).

### Example Code:
```jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

## 9. What is `useRef`?

In React, `useRef` is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but does not trigger a re-render when the value changes.

### Features:
1. **Persistent Across Renders**: The value stored in `useRef` persists between component re-renders. This means the value of a `ref` does not get reset when the component re-renders, unlike regular variables.
2. **No Re-Renders on Change**: Changing the value of a `ref` (`ref.current`) does **not** cause a component to re-render. This is different from state (`useState`), which triggers a re-render when updated.

### Example Code:
```jsx
import { useState, useRef } from "react";

function App() {
  const [currentCount, setCurrentCount] = useState(1);
  // This value gets overridden and is re-initialized on every render.
  // let timer = 0;
  // In place of a raw variable, we use useRef to store the variable such that it does not change anything in the DOM.
  const ref = useRef();

  function StartClock() {
    let value = setInterval(function() {
      setCurrentCount(c => c + 1);
    }, [1000]);
    ref.current = value;
  }

  function StopClock() {
    clearInterval(ref.current);
  }

  return (
    <>
      {currentCount}
      <button onClick={StartClock}>Start</button>
      <button onClick={StopClock}>Stop</button>
    </>
  );
}

export default App;
```
