# 1. What is Interface?
The `interface` keyword in TypeScript is a way for you to describe only what your objects are going to look like.

### Example Code:
```typescript
interface User {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
        pincode: number;
    };
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
};

// Check if the user's age is greater than 18
if (user.age > 18) {
    // If the condition is true, log that the user is an adult
    console.log("User is an adult");
}
```

# 2. What is Types?
The `type` keyword in TypeScript is a way for you to provide type aliases to your variables, objects, and functions. These aliases essentially describe what your data is going to look like. You can describe what your data is going to look like by using the core types (e.g. `string`, `number`, `boolean`, etc.) or by creating your own custom types.

### Example Code:
```typescript
type Usertype = {
    name: string;
    age: number;
};

function filteringUsers(users: Usertype[]): Usertype[] {
    return users.filter(user => user.age > 18);
}

const TypedUsers = filteringUsers([
    {
        name: 'John',
        age: 19
    }
]);
console.log(TypedUsers);
```

## Union
Union types allow a variable to hold values of multiple specified types. They are created using the `|` (pipe) symbol.

### Example Code:
```typescript
let value: string | number;
value = "Hello";  // Valid
value = 42;       // Valid
// value = true;  // Error: Type 'boolean' is not assignable to 'string | number'.

function printId(id: string | number): void {
    console.log("ID:", id);
}

printId(123);      // ID: 123
printId("abc");    // ID: abc
```

## Intersection
Intersection types combine multiple types into one. A variable must satisfy all combined types. They are created using the `&` (ampersand) symbol.

### Example Code:
```typescript
interface Employee {
    name: string;
    age: number;
}

interface Manager {
    role: string;
}

type ManagerEmployee = Employee & Manager;

let john: ManagerEmployee = {
    name: "John",
    age: 35,
    role: "Team Lead"
};
```

### Difference Between Union and Intersection
| Feature             | Union (`|`)                            | Intersection (`&`)                     |
|---------------------|---------------------------------------|---------------------------------------|
| Behavior            | A variable can be of any one type.   | A variable must satisfy all combined types. |
| Symbol              | `|` (pipe)                           | `&` (ampersand)                       |
| Example             | `string | number` (either type)      | `Person & Manager` (must satisfy both interfaces). |

### When to Use Type?
Use `type` when you need more flexibility, such as defining unions and intersections. It is especially useful when working with complex or custom type definitions that don't fit neatly into an interface.

## Difference Between Type and Interface
| Feature              | `type`                               | `interface`                           |
|----------------------|-------------------------------------|---------------------------------------|
| Use Case             | For aliases, unions, intersections, etc. | For describing object shapes.         |
| Extension            | Cannot extend but can use intersections. | Can extend other interfaces.          |
| Flexibility          | Can describe any type, including unions. | Limited to object-like types.         |
| Declaration Merging  | Not supported.                      | Supported (can add properties later). |

# 3. What is Abstract?
The `abstract` keyword is used to define abstract classes and abstract methods. An abstract class serves as a blueprint for other classes. It cannot be instantiated directly, meaning you cannot create objects from it. Instead, it is meant to be extended by other classes that implement its abstract methods.

### Key Features of Abstract Classes
1. **Blueprint for Derived Classes**:
   - Abstract classes can have both implemented methods (methods with functionality) and abstract methods (methods without functionality, declared only).
2. **Cannot be Instantiated**:
   - You cannot create an instance of an abstract class directly.
3. **Abstract Methods**:
   - Declared with the `abstract` keyword and must be implemented in derived classes.
   - Abstract methods don’t have a body in the abstract class.

### Syntax:
```typescript
abstract class AbstractClass {
    abstract methodName(): returnType; // Abstract method

    normalMethod(): void {
        console.log("This is a normal method");
    }
}
```

### Example Code:
```typescript
abstract class Shape {
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;

    describe(): void {
        console.log("This is a shape.");
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.calculateArea());      // 50
console.log(rect.calculatePerimeter()); // 30

const circle = new Circle(7);
console.log(circle.calculateArea());      // 153.938...
console.log(circle.calculatePerimeter()); // 43.982...
```