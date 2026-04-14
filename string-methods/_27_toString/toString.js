/**
 * @method: String.prototype.toString()
 * @description: Returns a string representing the specified object.
 */

const stringObj = new String("Hello");
console.log(typeof stringObj); // "object"

// Convert String object to primitive string
const primitive = stringObj.toString();
console.log(typeof primitive); // "string"

// Already a string? toString() returns the same value
const str = "world";
console.log(str.toString()); // "world"

// it convert any value into string formate
let num = 12;
console.log(num.toString());

console.log([12,3,4,].toString())
// toString methods is came on each object 

function hello(){
    console.log("hello")
}
console.log(hello.toString());