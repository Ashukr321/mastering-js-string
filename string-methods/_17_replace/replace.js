/**
 * @method: String.prototype.replace()
 * @description: Returns a new string with some or all matches of a pattern replaced by a replacement. 
 * The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
 * If pattern is a string, only the first occurrence will be replaced.
 */

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// Basic string replacement (replaces only the first "dog")
console.log(p.replace('dog', 'monkey'));

// Regex replacement (replaces only the first "dog" by default)
console.log(p.replace(/dog/, 'monkey'));

// Regex with /g flag (replaces all occurrences)
console.log(p.replace(/dog/g, 'monkey'));// g represent  

// Replacement with a function
const capitalized = p.replace(/\w+/g, (match) => match.toUpperCase());
console.log(capitalized);

// use in regex , 

