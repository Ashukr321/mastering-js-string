/**
 * @method: String.prototype.endsWith()
 * @description: Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
 * It's case-sensitive.
 */

const str = "JavaScript is awesome!";

// Basic check
console.log(str.endsWith("awesome!")); // true

// Case-sensitive
console.log(str.endsWith("Awesome!")); // false

// Check with length (search the string as if it were only this long)
console.log(str.endsWith("JavaScript", 10)); // true
