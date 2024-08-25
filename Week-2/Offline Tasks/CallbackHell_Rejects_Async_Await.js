// Promise function:-
function fs(duration){
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}
function callback(){
    console.log("5 second has passed");    
}
fs(5000).then(callback);

// Callback Hell:- Callback hell is a phenomenon where a Callback is called inside another Callback. It is the nesting of multiple Callbacks inside a function.
// eg:-
setTimeout(function() {
	console.log("Hello Great Grandfather");
	setTimeout(function () {
		console.log("Hello Grandfather");
		setTimeout(function (){
			console.log("Hello Father");
			setTimeout(function () {
				console.log("Hello Son");                
			},9000);
		},6000);
	},3000);
},1000);
console.log("Outside Callback hell");


// Promise Chaining:- It is simple concept by which we may initialize another promise inside our .then() method and accordingly we may execute our results. The whole thing works, because every call to a .then returns a new promise, so that we can call the .then on it. When a handler returns a value, it becomes the resul of that promise, so the next .then is called with it.

function setTimeoutPromisified(duration){
	return new Promise(function (resolve) {
		setTimeout(resolve, duration);
	});
}

// Promise chaining
// eg:-
setTimeoutPromisified(1000).then(function () {
	console.log("Hi");
	return setTimeoutPromisified(3000)
}).then(function () {
	console.log("Hello");
	return setTimeoutPromisified(5000)
}).then(function () {
	console.log("Hi There");	
});
console.log("Outside the callback hell");

// Async&Await:-The async and await syntax in JS provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations. async/await is essentially syntactic sugar on top of Promises.
// eg:-
async function solve(){
	await setTimeoutPromisified(1000);
	console.log("Hii");
	await setTimeoutPromisified(3000);
	console.log("Hello");
	await setTimeoutPromisified(5000);
	console.log("Hello there");	
}
solve();
console.log("Outside the async Code");
const { rejects } = require("assert");
const { log } = require("console");
const { on } = require("events");
// Note:- i. You can only call await inside a function if that function is async. ii. You cant have a top level await.


// rr First Callback vs rejects in Promises:-
// Callbacks:- fs.readFile function used an err first callback approach to propagate back errors
// eg:-
const fs = require("fs");
function afterDone(err,data){
	if(err){
		console.log("Error while reading file");		
	}else{
		console.log(data);		
	}
}
fs.readFile("a.txt", "utf-8", afterDone);

// Promises:- Promises use the reject argument to propagate errors.
// eg:-
const fs = require("fs");
function readFilePromisified(filePath){
	return new Promise(function (resolve, reject){
		fs.readFile(filePath, "utf-8", function(err,data) {
			if(err){
				reject("Error while reading file");
			}
			else{
				resolve(data);
			}
		});
	});
}

function onDone(data){
	console.log(data);	
}

function onError(err){
	console.log("Error: " + err);	
}

readFilePromisified("a.txt").then(onDone).catch(onError);





