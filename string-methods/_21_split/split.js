/**
 * @method: String.prototype.split()
 * @description: Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
 */

const str = "apple,banana,orange,kiwi";

const strData = str.split(","); // ["apple", "banana", "orange", "kiwi"];
console.log(strData);

const str2 = 'Hello';
console.log(str2.split('',2));  // we can also pass the limit how many number we want split

// split by each character
// each string or character put into single quotes 


const str3 = "";
console.log(str3.split(""));// return empty array bec split method return a array of split based on seperator 


// split method devide the string into substring and put all substring into array format
// split("separator",limit): how many number we want to separate 
