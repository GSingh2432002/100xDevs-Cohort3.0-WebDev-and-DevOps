/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str){
    const string1 = str.toLowerCase().split().join();
    const reverse = string1.split('').reverse().join('');

    // console.log(reverse,string1);

    if(string1 === reverse){
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrome('Hello, World'));
console.log(isPalindrome('racecar'));