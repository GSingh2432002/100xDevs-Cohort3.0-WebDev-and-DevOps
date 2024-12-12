// Define an interface 'UserName' to specify the structure of user objects
interface UserName {
    name: string; // 'name' property to store the user's name
    state: string; // 'state' property to store the user's state
    age: number;   // 'age' property to store the user's age
}

// Function to filter out users based on age criteria (greater than 18)
function filterUsers(usersTobe: UserName[]) {
    let ans = []; // Initialize an empty array to store filtered users

    // Iterate through each user in the input array
    for (let i = 0; i < usersTobe.length; i++) {
        // Check if the user's age is greater than 18
        if (usersTobe[i].age > 18) {
            ans.push(usersTobe[i]); // Add user to the filtered results
        }
    }

    // Return the array of filtered users
    return ans;
}

// Create an array of users and filter them using the 'filterUsers' function
const filteredUsers = filterUsers([
    {
        name: 'John',  // User's name
        state: 'CA',   // User's state
        age: 19        // User's age (greater than 18, so will be included in the result)
    }
]);

// Log the filtered users to the console
console.log(filteredUsers); // Outputs: [{ name: 'John', state: 'CA', age: 19 }]
