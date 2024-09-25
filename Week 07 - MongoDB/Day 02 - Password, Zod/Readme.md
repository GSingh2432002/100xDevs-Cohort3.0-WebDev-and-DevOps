# What is Hashing?

1. Hashing is a one-way process that turns data into a fixed length hash value using a hash function.
2. The primary goal of hashing is to ensure data integrity and validate the original data.
3. Hash functions are intended to be fast and efficient, generating unique hash values for each input.
4. Hashing is irreversible, which means it's computationally impractical to recover the original data from the hash value.

## Why should you hash passwords?

Password hashing is a technique used to securely store passwords in a way that makes them difficult to recover or misuse. Instead of storing the actual password, you store a hashed version of it.

## What is Salting?

A popular approach to hashing passwords involves using a hashing algorithm that incorporates a salt - a random value added to the password before hashing. This prevents attackers from using precomputed tables to crack passwords.

### Example:
```javascript
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB
});
```

Password format:
- `$2a$12$E0V50LSt1hUErz3d05f.ruME6K/.y3YIjRLJOKZyCGmuO7feO.xC.`
  - `$2a` - Version of bcrypt
  - `$12` - Number of iterations of hashing/Cost factor (saltRounds)
  - `E0V50LSt1hUErz3d` - Salt (16 Characters)/Salt value (base64 encoded)
  - `05f.ruME6K/.y3YIjRLJOKZyCGmuO7feO.xC` - Hashed password (base64 encoded)

## What is bcrypt?

bcrypt is a cryptographic hashing algorithm designed for securely hashing passwords. Developed by Niels Provos and David Mazières in 1999, bcrypt incorporates a salt and is designed to be computationally expensive, making brute-force attacks more difficult.

### Example:
```javascript
app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });

    res.json({
        message: "You are signed up"
    });
});
```

## What is Zod?

Zod is a schema declaration and validation library for TypeScript. It allows us to design schemas for any data, including primitive data types, objects, arrays, and more.

## Why do we need Zod?

Zod provides runtime schema validation for TypeScript. Schema validation confirms that data adheres to a standard defined by the developer. It is advantageous when getting user data in forms, sending data to APIs, and more. Typically, TypeScript provides schema validation at the compile time only, whereas Zod provides validation at runtime.

### Example:
```typescript
import { z } from "zod";
const userInput = z.string().min(5).max(10);
const result = userInput.safeParse("Hello Zod and TypeScript");

if (result.success) {
    console.log('Valid Data', result.data);
} else {
    console.error('Invalid Data', result.error.message);
}
```