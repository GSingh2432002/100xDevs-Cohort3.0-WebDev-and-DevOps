/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// aabbcc === aabbcc
function isAnagram(str1, str2){
    const sortedString1 = str1.toLowerCase().split('').sort().join(''); //here .sort() is not a function that is present in str1 but there is aray.sort() function is present so now we have to convert it into array then sort it and after sorting we join back create a string.
    const sortedString2 = str2.toLowerCase().split('').sort().join('');

    if (sortedString1 === sortedString2){
        return true
    } else{
        return false
    }
}
console.log(isAnagram("listen","silent"));
