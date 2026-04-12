/**
 * @method: String.prototype.concat()
 * @description: Concatenates the string arguments to the calling string and returns a new string.
 * It's generally better to use the + or += operators, or template literals.
 */

const hello = "Hello";
const world = "World";

// Basic concatenation
const combined = hello.concat(", ", world, "!");
console.log(combined); // "Hello, World!"

// Concatenating multiple strings
const multi = "a".concat("b", "c", "d");
console.log(multi); // "abcd"
