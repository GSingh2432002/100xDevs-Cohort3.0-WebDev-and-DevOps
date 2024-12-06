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

    useEffect(() => {
        const intervalId = setInterval(getDetails, 10 * 1000); // Fetch data every 10 seconds.

        // Cleanup function to clear the interval when the component unmounts.
        return () => {
            clearInterval(intervalId); // Prevent memory leaks.
        };
    }, [url]); // Dependency: `url`.

    // Returns the fetched finalData and the loading state, making them accessible to components.
    return {
        finalData: finalData,
        loading: loading
    }
}
    
