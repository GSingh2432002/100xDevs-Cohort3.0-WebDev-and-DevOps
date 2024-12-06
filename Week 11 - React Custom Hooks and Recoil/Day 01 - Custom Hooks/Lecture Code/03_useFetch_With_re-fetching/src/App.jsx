import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';

function App() {
  // Initializes currentPost with 1, representing the ID of the current post to be fetched. setCurrentPost updates the state when a button is clicked.
  const [currentPost, setCurrentPost] = useState(1);

  // Calls useFetch with the dynamic URL based on the current post ID. Destructures finalData (fetched data) and loading (fetching state) from the returned object.
  const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  // Displays a loading message (Loading.....) if loading is true. Prevents rendering of buttons and data until fetching is complete.
  if(loading){
    return(
      <div>
        Loading.....
      </div>
    )
  }

  // Renders buttons labeled 1, 2, and 3. Clicking a button updates currentPost to the corresponding number. Displays the finalData as a JSON string once the data is fetched.
  return (
    <>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </>
  )
}

export default App
