/**
 * @method: String.prototype.slice()
 * @description: Extracts a section of a string and returns it as a new string, without modifying the original string.
 * Supports negative indices (counts from the end).
 */

const str = 'The quick brown fox jumps over the lazy dog.';

// Extract from index 31 to the end
console.log(str.slice(31)); // "the lazy dog."

// Extract from index 4 to 19
console.log(str.slice(4, 19)); // "quick brown fox"

// Negative indices
console.log(str.slice(-4)); // "dog."
console.log(str.slice(-9, -5)); // "lazy"


// this methods commonly use  in the both string and array both 
