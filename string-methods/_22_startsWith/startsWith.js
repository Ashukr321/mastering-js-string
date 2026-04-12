/**
 * @method: String.prototype.startsWith()
 * @description: Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
 * It's case-sensitive.
 */

const str = "JavaScript is awesome!";

// Basic check
console.log(str.startsWith("JavaScript")); // true

// Case-sensitive
console.log(str.startsWith("javascript")); // false

// Check with position (search starts from this position)
console.log(str.startsWith("is", 11)); // true
