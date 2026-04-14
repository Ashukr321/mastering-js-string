/**
 * @description: String Immutability
 * 
 * Strings in JavaScript are immutable. Once created, they cannot be modified.
 * Methods that seem to "change" a string actually return a new string.
 * when we created the string using string literal and if the value is same in that case the value is store inside 
 * heap memory ( string pool) and both variable reference to that same value , modern memory management mechanism came 
 */


// let str = "Hello";
// str[0] = "h"; // Does nothing in non-strict mode, throws error in strict mode
// console.log(str); // "Hello" (unchanged)

// let newStr = str.toLowerCase(); // Returns a NEW string
// console.log(str); // "Hello" (original unchanged)
// console.log(newStr); // "hello" (new string)

let s1 = "Ashutosh";
let s2 = "Ashutosh";
console.log(s1===s2); // value wise is same 
// === : check value  + types 
// == : only check value not check type of the data 

// immutable means once the  variable declare or created it can't be mutate 
