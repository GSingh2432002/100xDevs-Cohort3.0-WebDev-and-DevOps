let counter = 1;
function functionCallback(){
    console.clear();
    console.log(counter);
    counter += 1;   
}
setInterval(functionCallback, 1000);


