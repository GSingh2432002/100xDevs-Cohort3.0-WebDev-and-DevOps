interface Address1 { 
    city: string;          // City of the address
    state: string;         // State of the address
    pincode: number;       // Pincode of the address
}

interface User1 {
    name: string;          // User's name
    age: number;           // User's age
    address?: Address1;     // Optional address object
}

interface Office {
    address: Address1;      // Address of the office
}

// Define a user object with the properties of the User interface
let newUser: User1 = {
    name: "Gaurav",         // Name of the user
    age: 22,                // Age of the user
    address: {
        city: "Durgapur",   // City in the user's address
        state: "West Bengal", // State in the user's address
        pincode: 713216     // Pincode in the user's address
    }
};

// Create a function that takes a user object as an argument and returns a boolean value based on the age of the user
function isLegal(newUser: User1): boolean {
    // return true if the user is 18 years or older, otherwise return false
    return newUser.age >= 18;
}

// Call the function isLegal with the user object and store the result in a variable called ans
let ans = isLegal(newUser);

// Print the result to the console using a conditional statement to print "Legal" if the ans variable is true, otherwise "Illegal"
if (ans) {
    console.log("Legal"); // Legal
} else {
    console.log("Illegal");
}
