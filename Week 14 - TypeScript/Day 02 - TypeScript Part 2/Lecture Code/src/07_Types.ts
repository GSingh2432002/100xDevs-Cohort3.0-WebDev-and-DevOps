// The type keyword in TypeScript is a way for you to provide type aliases to your variables, objects, and functions. These aliases essentially describe what your data is going to look like. You can describe what your data is going to look like by using the core types (e.g. string, number, boolean etc.) or by creating your own custom types.
// Define a custom type 'Usertype' to describe an object with 'name' and 'age' properties
type Usertype = {
    name: string;  // 'name' is a string property
    age: number;   // 'age' is a number property
}

// Function to filter users based on age, where the age should be greater than 18
function filteringUsers(users: Usertype[]): Usertype[] {
    // Use array's .filter() method to return users older than 18
    return users.filter(user => user.age > 18);
}

// Example usage: Call filteringUsers function with an array of users
const TypedUsers = filteringUsers([{
    name: 'John', // User's name
    age: 19       // User's age (greater than 18, so this user will be included)
}]);

console.log(TypedUsers); // Outputs: [{ name: 'John', age: 19 }]

// Union Types:- Define a type that allows multiple possibilities:-
type Result = "success" | "error" | "pending"; // 'Result' can only be one of these three strings

let operationResult: Result; // Declare a variable of type 'Result'
operationResult = "success";  // Valid
operationResult = "error";    // Valid
operationResult = "pending";  // Valid
// operationResult = "failed"; // Error: Type '"failed"' is not assignable to type 'Result'.

// Intersection Types:- Combine multiple types into one:-
type Address = {
    city: string;  // 'city' is a string property
    country: string; // 'country' is a string property
};

type Person = {
    name: string;  // 'name' is a string property
    age: number;   // 'age' is a number property
};

// The 'Employee' type combines both 'Person' and 'Address' using an intersection type (&)
type Employee = Person & Address;

let employee: Employee = {
    name: "John",    // Employee's name
    age: 30,         // Employee's age
    city: "New York", // Employee's city
    country: "USA"    // Employee's country
};
