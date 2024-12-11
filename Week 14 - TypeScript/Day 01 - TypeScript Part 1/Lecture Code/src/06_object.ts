// This greet function expects an object as an argument, and that object should have two properties: personName of type string; personAge of type number
function greet(user: {personName: string, personAge: number}) {
    console.log(`Hello ${user.personName}, you are ${user.personAge} years old`);    
}

// Here, you're defining a user object and passing it to the greet function. Since the object has the required personName and personAge properties, the function works as expected.
let user = {
    personName: 'John',
    personAge: 30
}
greet(user);

// Calling the function with an inline object. Here, you're passing an inline object directly to the greet function. This is perfectly valid since it matches the expected structure (with personName and personAge).
greet({
    personName: 'John',
    personAge: 30
})