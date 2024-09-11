// Fetch:- The fetch() method in JavaScript is a modern and powerful way to retrieve resources from a server. It returns a Promise that resolves to a Response object, encapsulating the server's response to your request.

// First way to write the fetch() is using .then syntax
function main(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (response) => {
        const json = await response.json();
        console.log(json.todos.length);
        await response.text()        
    });
}

// Second way to write the fetch() is using async/await syntax
async function main(){
    const response = await fetch("https://httpdump.app/dumps/");
    const json = await response.json();
    console.log(json.todos.length);
}
main();

// Axios:- Axios is a promise based HTTP client for node.js and the browser. It can run in the browser and node.js with same codebase. On the serve-side it uses the native node.js http module, while on the client it uses XMLHttpRequests.
const axios = require("axios");

async function main(){
    const response = await axios.get(
        "https://httpdump.app/dumps/63a35346-0e58-4ed3-8fff-436448f4d13b?a=b&b=c",{
            username:"Gaurav",
            password:"123456",
        },
    {
        headers:{
            Authorization: "Bearer 123",
        },  
    },
);
    console.log(response.data);
}
main();