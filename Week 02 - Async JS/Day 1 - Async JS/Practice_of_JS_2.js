// Goal:-
/*
1. I/O tasks
2. Callbacks
3. Functional Arguments
4. Async vs Sync Code
5. Event loops, Callback Queues, JS
*/

Synchronous Tasks:-
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

I/O bound tasks vs CPU bound tasks:-
/* 
CPU bound tasks:- CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.
Eg:-
    let ans = 0;
    for (let i=0; i<= 10000: i++){
        ans = ans + i;
    }
    console.log(ans);

I/O bound tasks:- I/O bound tasks are operations that are limited by the system's input/output capabilities, suhc as disk I/O, network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O operations to complete.
Eg:-
    const fs = require("fs);
    const contents = fs.readFileSync("a.txt", "utf-8");
    console.log(contents);
*/

I/O heavy operations:-
/*
I/O Heavy operation refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time consuming compared to in-memory computation.
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

Sync code and Async code:-
// const fs = require("fs");
// const contents1 = fs.readFileSync("a.txt", "utf-8");
// console.log(contents1);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

Functional Arguments:-
// Functional Arguments:- Passing a function to another function as an argument. 
// Write a calculator program that adds, subtracts, multiplies, divides two arguments.
// Without calling each and every function we can pass in what needs to be done as an argument
/*
function sum(a,b){
    return a + b;
}

function multipliy(a,b){
    return a * b;
}

function subtract(a,b){
    return a - b;
}

function divide(a,b){
    return a / b;
}

function doOperation(a,b,op){
    return op(a,b);
}
*/
/* Eg:-
    function doOperation(a,b,op){
    here it can be written as..
    let val = sum/divide/multiply/subtract(a,b);
    return val;
    }
*/
// console.log(sum(1,2, sum));

Asynchronous Function:-
// Asynchronous Function:- let's look at the code to read from a file asynchronously. Here we pass in a function as an argument. This function is called a callback since the function gets called back when the file is read.
const fs = require("fs"); 
function print(err, data){
    console.log(data);    
}
fs.readFile("b.txt", "utf-8", print); // String,String,Function.
fs.readFile("a.txt", "utf-8", print); // here we are not synchronously waiting for the I/O to happen. Whenever the I/O succeeds it will callback the third argument/it will the call the function that you have registered with it.
// console.log("Done!");

setTimeout:-
//setTimeout:- It is a asynchronous function that present in globally. setTimeout is another asynchronous function that executes a certain code after some time.
function timeout(){
    console.log("Click the button");
}
console.log("Hii");

setTimeout(timeout, 5000);

console.log("My name is Gaurav");

let c = 0;;
for(let i=0; i<=10; i++){
    c = c + 1;
}

console.log("My full name is Gaurav"); 

// Output:-
/*
Hii
My name is Gaurav
My full name is Gaurav
Click the button -> It happen becoz the thread wasn't free and that's why JavaScript is called Single Threaded Language.
JS doesn't provide setTimeout the web browser provide setTimeout function on the top.
*/

JS Architecture for Async Code:-
/*
1. Call Stack:-
    i. The call stack is a data structure that keeps track of the function calls in your program. It operates in a "Last In, First Out" (LIFO) manner, meaning the last function that was called is the first one to be executed and removed from the stack.
    ii. When a function is called, it gets pushed onto the call stack. When the function completes, it's popped off the stack.
    Eg:-
        function first(){
        console.log("First");
        }
        function second(){
        first();
        console.log("Second");
        }
        second();

2. Web APIs:-
    i. Web APIs are provided by the browser(or the Node.js runtime) and allow you to perform tasks that are outside the scope of the JavaScript language itself, such as making network requests, setting timers, or handling DOM events.

3. Callback Queue:-
    The callback queue is a list of tasks(callback) that are waiting to be executed once the call stack is empty. These tasks are added to the queue by the Web APIs after they have completed thier operation.

4. Event loop:-
    The event loop constantly checks if the call stack is empty. If it is, and there are callbacks in the callback queue, it will push the first callback from the queue onto the call stack for execution.
*/