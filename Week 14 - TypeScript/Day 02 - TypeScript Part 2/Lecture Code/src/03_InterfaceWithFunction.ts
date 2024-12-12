// Define an interface 'People' that outlines the structure of a person object
interface People {
    name: string; // 'name' is a string property to store the person's name
    age: number;  // 'age' is a number property to store the person's age
    greet: () => string; // 'greet' is a method that returns a string
}

// Create an object 'person' that adheres to the 'People' interface
let person: People = {
    name: "Gaurav", // Assign the name property a value of "Gaurav"
    age: 22,        // Assign the age property a value of 22
    greet: () => {  // Define the 'greet' method to return a greeting message
        return "Hii"; // The method returns a simple "Hii" string
    },
};

// Call the 'greet' method of the 'person' object and log the result to the console
console.log(person.greet()); // Outputs: "Hii"
