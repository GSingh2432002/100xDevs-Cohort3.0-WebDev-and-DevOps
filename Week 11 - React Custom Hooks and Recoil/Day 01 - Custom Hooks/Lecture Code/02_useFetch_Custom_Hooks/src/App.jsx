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

export default App;

// import './App.css'
// import { usePostTitle } from './hooks/useFetch'

// function App() {
//   // Calls the custom hook to get the title of the post.
//   const postTitle = usePostTitle();

//   return (
//     <>
//       {/* Displays the fetched title in the UI. */}
//       {postTitle} 
//     </>
//   )
// }

// export default App

// Defining all the hooks in same file.
{/*
  import './App.css' 
  import { useEffect, useState } from 'react'

  function App() {
    // Declares a state variable post and a function setPost to update it. post: Initially set to 0. This will later store the JSON data fetched from the API. setPost: Updates the value of post.
    const [post, setPost] = useState(0);

    // Defines an asynchronous function getPosts that fetches data from a remote API.
    async function getPosts(){

      // Sends a GET request to the placeholder API (https://jsonplaceholder.typicode.com/todos/1) to fetch a to-do item. The fetch function returns a Promise containing the server's response.
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

      // Converts the fetched response into JSON format so it can be used as a JavaScript object.
      const json = await response.json();

      // Updates the post state with the fetched JSON data.
      setPost(json);
    }

    // The useEffect hook is used to handle side effects (e.g., fetching data). getPosts is called once when the component is mounted (due to the empty dependency array []). Without [], getPosts would run on every render.
    useEffect(() => {
      getPosts();
    }, [])

    // Renders the title property of the post object in the UI. Initially, nothing is displayed because post is 0. Once data is fetched, post.title is shown.
    return (
      <>
        {post.title}
      </>
    )
  }

  export default App
*/}