// Define an interface to describe the structure of a User object. The User interface defines the expected structure of a user object. This helps TypeScript enforce type-checking, ensuring that any object matching the User interface has the required properties with correct data types.
interface User{
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
        pincode: number;
    }
}
// Create a user object with the structure defined by the User interface
let user = {
    name: "Gaurav",
    age: 22,
    address: {
        city: "Kolkata",
        country: "India",
        pincode: 800190
    }
}
// Check if the user's age is greater than 18
if(user.age > 18){
    // If the condition is true, log that the user is an adult
    console.log("User is an adult");
}
