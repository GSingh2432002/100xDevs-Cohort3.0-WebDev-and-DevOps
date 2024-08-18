/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
function busyWait(milliseconds){
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    })
}
busyWait(3000).then(() => {
    console.log("3 seconds have been passed, after busy-waiting");    
})