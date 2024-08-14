/*
Today's Goal:-
1. Classes in JS
2. Revise Callbacks
3. Callback hell
4. Promises
5. Async await
*/

// Classes in JS:-
// Primitive types:-
/*
1. number
2. string
3. boolean

// Complex types:-
1. Objects
2. Arrays
*/

// Classes:- In Javascript, classes are a way to define blueprints for creating objects.
//Eg:-
//     class Rectangle{ // Class
//         constructor(width, height, color){
//             this.height = height;
//             this.width = width;
//             this.color = color;
//         }
//         area(){
//             const area = this.width * this.height;
//             return area;
//         }
//         paint(){
//             console.log("Color is " + this.color);
            
//         }
//     }
// const rect = new Rectangle(1,2,"Blue"); // Object of a class
// "new" means the contructor "Rectangle" automatically gets called/ want to create new object/instance of "Rectangle" class.
// "this" variable gives access to this instance inside the class
// rect means object/instance of the Rectangle class.
// const area = rect.area();
// const paint = rect.paint();
// console.log(area,paint);
// Key Concepts:-
/*
1. Class Declaration:
    i. You declare a class using the class keyword.
    ii. Inside a class, you define properties(variables) and methods(functions) that will belong to the objects created from this class.

2. Constructor:
    i. A special method inside the class that is called when you create an instance(an object) of the class.
    ii. It is used to initialize the properties of the object.

3. Methods:
    i. Functions that are defined inside the class and can be used by all instances of the class.

4. Inheritance:
    i. Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.

5. Static Methods:
    i. Methods that belong to the class itself, not to instances of the class. You call them directly on the class.

6. Getters and Setters:
    i. Special methods that allows you to define how properties are accessed and modified.
*/

// Inheritance in classes:- Inheritance in JS classes allow one class to inherit properties and methods from another class. This mechanism enables code reuse, making it easier to create new classes that are based existing ones, without having to duplicate code.

// Some more Classes:-
// Date:-
    // const now = new Date(); // Current date and time
    // console.log(now.toISOString()); // Outputs the date in ISO format.

//Maps:-
// const map = new Map();
// map.set('name', 'Ram');
// map.set('age', 'Infinity');
// console.log(map.get('name'));
// console.log(map.get('age'));

// Promise Class:- Calling a promise is easy, defining your own promise is where things get hard.
// A Promise in JS is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O or timers.
/*
Eg:-
    function setTimeoutPromisified(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function callback(){
        console.log("3 seconds have been passed");        
    }
    setTimeoutPromisified(3000).then(callback)

Eg:-
    function waitFor3S(resolve){ // Here, resolve = main
        setTimeout(resolve, 3000)
    }
    function main(){
        console.log("main is called");
    }
    waitFor3S(main);
*/

// Promisified Version of setTimeout
function random(resolve){ // resolve is also a function. Whenever resolve gets called callback is called.
    resolve();
}
let p = new Promise(random); // 1st step Promise is a class which get which gets called after you passed first argument.

// Promise takes function as an input whose first argument is also a function which will be called after resolving the promise
function callback(){
    console.log("Promise Succeded");    
}
p.then(callback);
