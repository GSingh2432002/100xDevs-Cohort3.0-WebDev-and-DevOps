const currentDate = new Date();
let currHours = currentDate.getHours();
let currMinutes = currentDate.getMinutes();
let currSeconds = currentDate.getSeconds();

setInterval(() => {
    currSeconds++;
    if(currSeconds % 60 == 0) {
        currSeconds = 0;
        currMinutes++;
    }
    if(currMinutes % 60 == 0 && currSeconds === 0) {
        currMinutes = 0;
        currHours++;
    }

    currSeconds %= 60;
    currMinutes %= 60;
    currHours %= 24;

    let merdian = currHours >= 12 ? "PM" : "AM";
    let hour12 = currHours % 12;
    hour12 = hour12 === 0 ? 12 : hour12; // Convert 0 to 12 for 12-hour format

    if(currSeconds < 10) {
        currSeconds = "0" + currSeconds;
    }
    if(currMinutes < 10) {
        currMinutes = "0" + currMinutes;
    }
    if(hour12 < 10) {
        hour12 = "0" + hour12;
    }
 
    console.log(`The current time of the machine is ${hour12}:${currMinutes}:${currSeconds} ${merdian}`);
}, 1000);
