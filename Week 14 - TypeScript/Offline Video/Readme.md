## 1. What is `Pick`?
`Pick` is a utility type provided by the TypeScript standard library. It is used to create a new type by selecting a subset of properties from an existing type or interface. This is particularly useful when you want to reuse part of a type without redefining it.

Syntax:
```typescript
Pick<Type, Keys>
    Type: The existing type or interface from which you want to pick properties.
    Keys: A union of the keys (property names) you want to include in the new type.
```

Example Code:
```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin: boolean;
}

// Pick only 'id' and 'name' properties
type UserSummary = Pick<User, 'id' | 'name'>;

const user: UserSummary = {
    id: 1,
    name: 'John Doe'
};
console.log(user); // Output: { id: 1, name: 'John Doe' }
```
---

## 2. What is `Partial`?
`Partial` is a utility type that makes all properties of a given type optional. It is useful when you want to create a new type where some or all of the properties of an existing type or interface are optional. 

- `Partial<User>` creates a new type where all properties (`id`, `name`, `email`, `age`) are optional. 
- This means you can define an object with any subset of the original properties.

Example Code:
```typescript
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
```
---

## 3. What is `Readonly`?
The `readonly` modifier is used to mark properties of an object as immutable, meaning their values cannot be changed after they are initialized. This is particularly useful for creating objects or interfaces where some properties should not be modified once assigned.

Syntax:
```typescript
For properties in interfaces or classes:
    readonly propertyName: Type;
For arrays and tuples:
    readonly Type[];
    readonly [Type1, Type2, ...];
```

Example Code:
```typescript
interface User {
    readonly id: number; // Cannot be modified after initialization
    name: string;
}

const user: User = { id: 1, name: 'John' };
console.log(user.id); // Output: 1

user.name = 'Doe';   // This is allowed
user.id = 2;         // Error: Cannot assign to 'id' because it is a read-only property.
```
---

## 4. What is `Records`?
`Record` is a utility type that allows you to create an object type with a specific set of keys and their associated value types. It's often used when you want to enforce a consistent structure for objects with a fixed set of keys.

### Key Points:
- Record is ideal for mapping fixed keys to specific value types.
- It enforces a consistent structure, ensuring all keys are present.
- It works well with string literal unions or dynamic keys.

Syntax:
```typescript
Record<Keys, Type>
    Keys: The type of the keys in the object. Typically a union of string literals or an existing type.
    Type: The type of the values associated with the keys.
```

Example Code:
```typescript
type UserRoles = 'admin' | 'user' | 'guest';

// Create a Record type where each key is one of the `UserRoles` and the value is a string
const userPermissions: Record<UserRoles, string> = {
    admin: 'Full Access',
    user: 'Limited Access',
    guest: 'Read-Only Access',
};

console.log(userPermissions);
/* Output:
{
admin: 'Full Access',
user: 'Limited Access',
guest: 'Read-Only Access'
}
*/
```
---

## 5. What is `Map`?
A `Map` is a built-in data structure (introduced in ES6) that represents a collection of key-value pairs. It is similar to objects but comes with additional features and capabilities that make it more flexible for certain use cases.

### Key Features of Map:
- **Key Flexibility**: Unlike objects, Map keys can be of any type, including objects, functions, and primitives.
- **Order Preservation**: Iteration over Map entries happens in the order in which they were added.
- **Size Property**: The size property directly gives the number of entries in a Map.
- **Iteration Methods**: Maps provide built-in methods for easy iteration, such as `forEach`, `keys`, `values`, and `entries`.
- **Performance**: Map is optimized for frequent additions and deletions.

Syntax:
```typescript
let map = new Map<keyType, valueType>();
    keyType: The type of the keys in the map.
    valueType: The type of the values associated with those keys.
```

Example Code:
```typescript
Method 1:-
    const userInfo = new Map<number, { name: string; age: number }>();
    userInfo.set(1, { name: 'John', age: 30 });
    userInfo.set(2, { name: 'Alice', age: 25 });

    // Access values
    console.log(userInfo.get(1)); // Output: { name: 'John', age: 30 }

Method 2:-
    type User = {
        name: string;
        age: number;
        email: string;
    }
    const users = new Map<string, User>()
    users.set("A", {name: "GKS", age: 22, email: "gks@12.com" })
    users.set("B", {name: "GK", age: 21, email: "gk@12.com" })
    users.set("C", {name: "G", age: 20, email: "g@12.com" })
    const user = users.get("A");
    console.log(user);
```
---

## 6. What is `Exclude`?
`Exclude` is a utility type that allows you to exclude specific types from a union type. It is commonly used to create a new type by omitting certain members of a union. The Exclude utility type evaluates each member of the union `T`. If the member is assignable to `U`, it is excluded; otherwise, it is kept.

Syntax:
```typescript
Exclude<T, U>
    T: The union type you want to modify.
    U: The type or types you want to exclude from T.
```

Example Code:
```typescript
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeType = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeType) => {
    console.log(`Handling Event: ${event}`);
}

handleEvent('click'); // Handling Event: click
```
---

## Comparison with Other Types

| Feature       | Record                  | Partial               | Pick                     |
|---------------|-------------------------|-----------------------|--------------------------|
| Purpose       | Define object keys and values | Make properties optional | Select specific properties |
| Key Flexibility | Requires all keys to be defined | No key constraints    | Keys must exist in the type |
| Use Case      | Object mappings         | Partial updates       | Subset of properties      |
