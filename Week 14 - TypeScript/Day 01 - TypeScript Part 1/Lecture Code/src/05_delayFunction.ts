// the delayedCall function takes a function fn as its parameter. This fn is expected to be a function that does not take any arguments and returns void. You then use setTimeout to call fn after 5 seconds (5000 milliseconds).
function delayedCall(fn: () => void){
    setTimeout(fn, 5000);
}

// The log function is a simple function that logs "5 seconds have passed" to the console.
function log(){
    console.log("5 seconds have passed");
}

// Here, you're passing the log function to delayedCall. The log function will be executed after 5 seconds because of the setTimeout inside delayedCall.
delayedCall(log);