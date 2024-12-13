interface User3 {
    id: number;
    name: string;
}
const ReadOnlyUser: Readonly<User3> = { id: 1, name: 'Gaurav' };
console.log(ReadOnlyUser);

// ReadOnlyUser.id = 1; // Error: Cannot assign to 'id' because it is a read-only property.
// ReadOnlyUser.name = 'Gaurav'; // Error: Cannot assign to 'name' because it is a read-only property.
