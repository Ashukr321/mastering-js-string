/**
 * @description: String Immutability
 * 
 * Strings in JavaScript are immutable. Once created, they cannot be modified.
 * Methods that seem to "change" a string actually return a new string.
 */

let str = "Hello";
str[0] = "h"; // Does nothing in non-strict mode, throws error in strict mode
console.log(str); // "Hello" (unchanged)

let newStr = str.toLowerCase(); // Returns a NEW string
console.log(str); // "Hello" (original unchanged)
console.log(newStr); // "hello" (new string)
