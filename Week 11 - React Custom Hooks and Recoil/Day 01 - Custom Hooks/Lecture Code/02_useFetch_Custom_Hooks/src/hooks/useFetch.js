{/*
import { useEffect } from "react";
import { useState } from "react";

// It is not a normal function; it is a hook.
export function usePostTitle(){
    // Initializes the state `post` to `0`.
    const [post, setPost] = useState(0);

  async function getPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    // Converts response into JSON format.
    const json = await response.json();
    
    // Updates `post` with the fetched JSON object.
    setPost(json);
  }

  useEffect(() => {
    // Fetches data when the hook is first used (component mounts).
    getPosts();
  }, []); // Empty dependency array ensures `getPosts` runs only once.

  // Returns the `title` from the fetched data.
  return post.title;
}
*/}

import { useEffect, useState } from "react";

export function useFetch(url){
    // finalData: Stores the data fetched from the API, initialized as an empty object ({}). loading: Tracks whether the data is currently being fetched. Initially undefined (false implicitly).
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState();

    async function getDetails(){
        setLoading(true); // Sets `loading` to `true` to indicate the start of a fetch operation.
        const response = await fetch(url); // Fetches data from the provided `url`.
        const json = await response.json(); // Converts the response into JSON format.
        setFinalData(json); // Updates `finalData` with the fetched JSON data.
        setLoading(false); // Sets `loading` to `false` to indicate that the fetch is complete.
    }
    
    // Calls getDetails whenever the url changes. The dependency array ([url]) ensures the fetch logic runs only when the URL is updated.
    useEffect(() => {
        getDetails();
    }, [url])

    // Returns the fetched finalData and the loading state, making them accessible to components.
    return {
        finalData: finalData,
        loading: loading
    }
}