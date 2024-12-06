// React Formula We should know:- it returns first, effect gets called later.
import { useEffect, useRef } from "react";

// useRef: Initializes a mutable ref object to store the previous value. ref.current: Initially undefined.
export const usePrev = (value) => {
    const ref = useRef();

    // Logs to the console whenever the component re-renders with the new value passed to usePrev.
    console.log("re-render happened with new value " + value);

    // Runs whenever the value changes. Updates ref.current to store the latest value. 
    useEffect(() => {
        console.log("Updated the ref to be " + value);
        ref.current = value;        
    }, [value]); // [value]: Ensures the effect runs only when value changes.
    
    // Logs and returns the previous value stored in ref.current.
    console.log("returned " + ref.current);
    return ref.current;    
}