// function to fetch data from the server
async function fetchPost(){
    // log the message to the console before sending the request
    console.log("Before sending request");

    // fetch data from the server using the fetch method and store it in the response variable
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

    // convert the response to json format and store it in the data variable
    const data = response.data;

    // log the data to the console
    console.log(data);

    // log the message to the console after receiving the response
    console.log("After receiving response");

    // display the data in the browser as a string
    document.getElementById("posts").innerHTML = JSON.stringify(data);   
}

// call the fetchPost function
fetchPost();