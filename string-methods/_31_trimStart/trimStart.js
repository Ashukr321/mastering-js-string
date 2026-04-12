/**
 * @method: String.prototype.trimStart() (alias trimLeft)
 * @description: Removes whitespace from the beginning of a string and returns a new string.
 */

const greeting = '   Hello world!   ';

// Trim only the start
console.log(greeting.trimStart()); // "Hello world!   "

// Original string is unchanged
console.log(greeting); // "   Hello world!   "
