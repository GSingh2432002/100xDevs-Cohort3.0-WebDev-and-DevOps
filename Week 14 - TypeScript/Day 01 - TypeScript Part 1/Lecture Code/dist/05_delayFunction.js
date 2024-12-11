"use strict";
function delayedCall(fn) {
    setTimeout(fn, 5000);
}
function log() {
    console.log("5 seconds have passed");
}
delayedCall(log);
