{/*
  <BrowserRouter>: Wraps the app, enabling the routing system.
  <Link>:
  <Link to="/">Allen Institute</Link> creates a clickable link to navigate to the home page (/).
  The other links navigate to /neet/online-coaching-class-11 and /neet/online-coaching-class-12.
  <Routes>: Contains all route definitions.
  <Route>:
  path="/" maps the root URL to the <Landing> component.
  path="/neet/online-coaching-class-11" maps to <Class11Program>.
  path="/neet/online-coaching-class-12" maps to <Class12Program>.
  path="*" acts as a catch-all route for unmatched URLs, rendering <ErroPage>.
*/}
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="*" element={<ErroPage />} />
          
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

// Displays a 404 error message when the user navigates to an undefined route.
function ErroPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  )
}

function Layout(){
  return(
    <div style={{ height: "100vh", backgroundColor: "yellow" }}>
      <Header/>
      <div style={{ height: "90vh", backgroundColor: "red" }}>
        <Outlet />
      </div>
      Footer | Contact Us
    </div>
  )
}

function Header(){
  return(
    <div>
      <Link to="/">Allen Institute</Link> | <Link to="/neet/online-coaching-class-11">Class 11</Link> | <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
  )
}

// Displays a welcome message for the root URL /.
function Landing() {
  return (
    <div>
      <h1>Welcome to the Allen Institute</h1>
    </div>
  )
}

// Displays the Class 11 program page when navigated to /neet/online-coaching-class-11.
function Class11Program(){
  return(
    <div>
      <h1>Class 11 Program</h1>
    </div>
  )
}

function Class12Program(){
  // useNavigate: Retrieves the navigate function to programmatically navigate.
  const navigate = useNavigate();
  
  // redirectUser: A function that navigates to the home page (/) when called.
  function redirectUser(){
    navigate("/");
  }

  return(
    <div>
      <h1>Class 12 Program</h1>
      {/* <button>: Triggers redirectUser on click, redirecting the user to the landing page. */}
      <button onClick={redirectUser}>Back to Landing Page</button>
    </div>
  )
}

export default App;
