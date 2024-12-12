// Define an interface 'RandomUser' that acts as a blueprint for user objects
interface RandomUser {
    name: string; // 'name' property to store the user's name
    age: number;  // 'age' property to store the user's age
    isLegal(): boolean; // 'isLegal' method to determine if the user is of legal age
}

// Create a class 'MainUser' that implements the 'RandomUser' interface
class MainUser implements RandomUser {
    name: string; // Declare 'name' property
    age: number;  // Declare 'age' property

    // Constructor to initialize 'name' and 'age' properties
    constructor(name: string, age: number) {
        this.name = name; // Assign the name parameter to the 'name' property
        this.age = age;   // Assign the age parameter to the 'age' property
    }

    // Implement the 'isLegal' method to check if the user is of legal age (18 or older)
    isLegal(): boolean {
        return this.age >= 18; // Return true if age is 18 or more, otherwise false
    }
}

// Create an instance of 'MainUser' with the name "Gaurav Singh" and age 22
const AnyUser = new MainUser("Gaurav Singh", 22);

// Call the 'isLegal' method on the 'AnyUser' instance and log the result
console.log(AnyUser.isLegal()); // Outputs: true
