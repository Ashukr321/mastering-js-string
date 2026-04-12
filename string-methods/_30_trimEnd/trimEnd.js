/**
 * @method: String.prototype.trimEnd() (alias trimRight)
 * @description: Removes whitespace from the end of a string and returns a new string.
 */

const greeting = '   Hello world!   ';

// Trim only the end
console.log(greeting.trimEnd()); // "   Hello world!"

// Original string is unchanged
console.log(greeting); // "   Hello world!   "
