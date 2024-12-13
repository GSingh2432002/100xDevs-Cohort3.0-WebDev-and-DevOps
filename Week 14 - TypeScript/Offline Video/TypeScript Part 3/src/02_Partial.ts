interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Make all properties of `User` optional
type PartialUser = Partial<User>;

const user2: PartialUser = {
    name: 'John Doe'  // Only `name` is provided, other properties are optional
};
console.log(user2); // Output: { name: 'John Doe' }
