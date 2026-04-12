/**
 * @method: String.prototype.trim()
 * @description: Removes whitespace from both ends of a string and returns a new string, without modifying the original string. 
 * Whitespace includes space, tab, no-break space, and all line terminator characters.
 */

const greeting = '   Hello world!   ';

// Trim both ends
console.log(greeting.trim()); // "Hello world!"

// Original string is unchanged
console.log(greeting); // "   Hello world!   "
