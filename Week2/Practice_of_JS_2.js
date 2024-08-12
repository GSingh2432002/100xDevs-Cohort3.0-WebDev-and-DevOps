// Goal:-
/*
1. I/O tasks
2. Callbacks
3. Functional Arguments
4. Async vs Sync Code
5. Event loops, Callback Queues, JS
*/

// Synchronous Code:- Synchronous code is executed line by line, in order it's written. Each operation waits for the previous one to complete before moving on to the next one.
/*
Eg:- function sum(n){
    let ans = 0;
    for (let i=0; i<=n; i++){
        ans = ans + i
    }
    return ans;
}
const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
*/

// I/O heavy operations:-
/*
I/O Heavy operation refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time consuming compared to in memory computation.
Eg:-
1. Reading a file
2. Starting a clock
3. HTTP Requests
*/

// Write the code to read a file synchronously
/*
const fs = require("fs");
const contents1 = fs.readFileSync("a.txt", "utf-8");
console.log(contents1);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);
*/

// Sync code and async code
const fs = require("fs");
const contents1 = fs.readFileSync("a.txt", "utf-8");
console.log(contents1);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);
