// Define the User1 interface with all user properties
interface User1 { 
    id: number;        
    name: string;      
    age: number;       
    email: string;     
    password: string;  
}

// Use the Pick utility type to create a new type that selects only 'id', 'name', and 'age' from User1
type UpdateUser1 = Pick<User1, 'id' | 'name' | 'age'>;

// Create a variable of type UpdateUser1 with the required properties
const user1: UpdateUser1 = {
    id: 1,          // User's unique ID
    name: 'John',   // User's name
    age: 25         // User's age
};

// Log the user1 object to the console
console.log(user1);  // Output: { id: 1, name: 'John', age: 25 }
