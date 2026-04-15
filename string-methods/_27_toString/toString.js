/**
 * @method: String.prototype.toString()
 * @description: Returns a string representing the specified object.
 */

const stringObj = new String("Hello");// create object inside the heap memory 
console.log(typeof stringObj); // "object"

// Convert String object to primitive string
// means string object ot primitive data string converted 

const primitive = stringObj.toString();

console.log(typeof primitive); // "string"

// Already a string? toString() returns the same value
const str = "world";//string literal 
console.log(str.toString()); // "world"

// it convert any value into string formate
let num = 12;
console.log(num.toString());
// // toString is the methods of Object.prototype 

console.log([12,3,4,].toString())// array object : we can able to call on this also 

// toString methods is came on each object 

// function declaration 
function hello(){
    console.log("hello")
}

console.log(hello.toString()); //"hello"