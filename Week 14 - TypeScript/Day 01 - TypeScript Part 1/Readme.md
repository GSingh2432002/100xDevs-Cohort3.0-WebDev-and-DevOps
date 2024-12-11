## 1. Types of Languages?

### Strongly Typed Languages
- **Examples:** Java, C++, C, Rust
- **Benefits:**
  - Lesser Runtime Errors
  - Stricter Codebase
  - Easy to catch errors at compile time

#### Example Code:
```cpp
#include <iostream>
int main() {
    int number = 10;
    number = "text";
    return 0;
}
```

### Loosely Typed Languages
- **Examples:** Python, JavaScript, Perl, Php
- **Benefits:**
  - Easy to write code
  - Fast to bootstrap
  - Low Learning Curve

#### Example Code:
```javascript
function main() {
    let number = 10;
    number = "text";
    return number;
}
```

---

## 2. What is TypeScript?
TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. This is the high-level benefit of TypeScript: it lets you catch type errors in your codebase.

---

## 3. Where/How does TypeScript code run?
TypeScript code never runs in your browser. Your browser can only understand JavaScript.

1. JavaScript is a runtime language (the thing that actually runs in your browser/Node.js runtime).
2. TypeScript is something that compiles down to JavaScript.
3. When TypeScript is compiled down to JavaScript, you get type checking (similar to C++). If there is an error, the conversion to JavaScript fails.

---

## 4. TypeScript Compiler
`tsc` is the official TypeScript compiler that you can use to convert TypeScript code into JavaScript.

---

# Steps to Run TypeScript with Node.js:-

Follow these steps to set up a Node.js project that uses TypeScript and run your TypeScript files locally:

## Commands and Explanation

### 1. **Initialize the Project**
```bash
npm init -y
```
- Creates a `package.json` file with default values.
- This file contains metadata about your project, such as dependencies and scripts.

---

### 2. **Install TypeScript**
```bash
npm i typescript
```
- Installs TypeScript as a dependency in your project.
- Adds TypeScript to the `node_modules` folder and updates `package.json`.

---

### 3. **Initialize TypeScript Configuration**
```bash
npx tsc --init
```
- Creates a `tsconfig.json` file in your project directory.
- This file contains settings for the TypeScript compiler, such as:
  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "strict": true,
      "outDir": "./dist"
    }
  }
  ```

---

### 4. **Compile TypeScript Files**
```bash
npx tsc -b
```
- Compiles all `.ts` files in your project based on the configuration in `tsconfig.json`.
- Outputs the JavaScript files into the specified `outDir` (default: `dist` directory).

---

### 5. **Run the Compiled JavaScript File**
```bash
node filename.js
```
- Executes the compiled JavaScript file using Node.js.
- Example: If `app.ts` was compiled to `dist/app.js`, run:
  ```bash
  node dist/app.js
  ```

---

## Example Workflow

### `app.ts` (TypeScript File):
```typescript
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("World"));
```

### Commands to Run:
1. Initialize the project:
   ```bash
   npm init -y
   ```
2. Install TypeScript:
   ```bash
   npm i typescript
   ```
3. Create `tsconfig.json`:
   ```bash
   npx tsc --init
   ```
4. Compile the TypeScript file:
   ```bash
   npx tsc -b
   ```
5. Run the compiled JavaScript file:
   ```bash
   node dist/app.js
   ```

---

## Notes
- Always ensure `tsconfig.json` is properly configured for your project needs.
- You can automate the build process using npm scripts in `package.json`. For example:
  ```json
  "scripts": {
    "build": "tsc",
    "start": "node dist/app.js"
  }
  ```
  Then, run:
  ```bash
  npm run build
  npm run start
  ```
