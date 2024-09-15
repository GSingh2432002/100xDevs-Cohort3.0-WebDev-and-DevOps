// If a certain codebase may throw an error then we can wrap it into try/catch block 
try{
    let a;
    console.log(a.length);
    console.log("Inside try block statement");   
} catch(e){
    console.log("Inside catch block statement");
}
console.log("Outside the try/catch block statement");
