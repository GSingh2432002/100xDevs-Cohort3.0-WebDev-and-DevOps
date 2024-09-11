/* Arrow Function:- An arrow function is essentially an anonymous function with shorter syntax. They are often assigned to variables, making them reusable.
    Eg:-
        1. const example = () => {
            console.log("Hi Gaurav!");
        }
*/
const sum = (a,b) => {
    return a + b;
}
const answerone = sum(1,2);
console.log(answerone);

// Map:- The map() method in JavaScript creates a new array by applying a function to each element of the original array. It skips empty elements, doesn't modify the original array, and is ideal for transforming data efficiently without altering the source array.

// Given an array, give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5] * 2 = [2,4,6,8,10]
const input1 = [1,2,3,4,5];
const newArray = [];
for(let i=0; i<input1.length; i++){
    newArray.push(input1[i] + 2);
}
console.log(newArray);

// Using map function without arrow function.
const input2 = [1,2,3,4,5];
function transformed1(i){
    return i * 2;
}
const answer1 = input2.map(transformed1);
console.log(answer1);

// Using map function with arrow function.
const input3 = [1,2,3,4,5];
const answer2 = input3.map(function(i){
    return i * 2;
});
console.log(answer2);


// Filter:- The filter() method creates a new array containing elements that satisfy a specified condition from a provided function. It skips over empty elements and leaves the original array unchanged, making it ideal for selective data processing without altering the source array.

// Given an array, give me back a even array
// Not a correct way to write it only for understanding i'm writing in this way
const arr = [1,2,3,4,5];
function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
}
const ans = arr.filter(filterLogic);
console.log(ans);

// Right way to write filter logic
const arr2 = [1,2,3,,4,5];
const ans2 = arr2.filter(function(n) {
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(ans2);
