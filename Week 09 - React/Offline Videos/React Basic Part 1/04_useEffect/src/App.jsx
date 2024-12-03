// useEffect: A React hook that allows you to perform side effects (e.g., data fetching) in a functional component.
// useState: A React hook to manage state in functional components.
import { useEffect, useState } from "react"

// Declares a functional component named App, which serves as the main component of the application.
function App() {
  // currentTab: Holds the currently selected tab number (initially 1), setCurrentTab: Updates the value of currentTab.
  const [currentTab, setCurrentTab] = useState(1);

  // tabData: Holds data fetched for the selected tab (initially an empty object), setTabData: Updates the value of tabData.
  const [tabData, setTabData] = useState({});

  // loading: Indicates whether the data is currently being fetched (initially true), setLoading: Updates the value of loading.
  const [loading, setLoading] = useState(true);

  // useEffect: A hook used to perform data fetching when the component is rendered or when currentTab changes.
  useEffect(function() {
    //Sets loading to true to indicate data is being fetched.
    setLoading(true);

    // Fetches data from an API endpoint. The URL dynamically includes the currentTab value.
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)

    // .then: Handles the fetch response. Converts the response into JSON format and updates: tabData: With the fetched JSON data. loading: To false once the data has been fetched.
    .then(async function(response) {
      const json = await response.json();
      setTabData(json);
      setLoading(false);
    });

    // Dependency Array: Ensures this effect re-runs whenever currentTab changes.
  }, [currentTab]);
  
  return <div>
      <button onClick={function() {
        setCurrentTab(1)
      }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
      <button onClick={function() {
        setCurrentTab(2)
      }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
      <button onClick={function() {
        setCurrentTab(3)
      }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
      <button onClick={function() {
        setCurrentTab(4)
      }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
    <br/>
    
      {/* "Loading...": If loading is true. tabData.title: Once the data has been fetched. */}
      {loading ? "Loading..." : tabData.title}
    </div>
}

export default App
