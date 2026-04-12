/**
 * @method: String.prototype.replaceAll()
 * @description: Returns a new string with all matches of a pattern replaced by a replacement. 
 * The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
 * If pattern is a RegExp, it MUST have the /g flag.
 */

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// Replaces all occurrences of "dog" with "monkey"
console.log(p.replaceAll('dog', 'monkey'));

// Regex replacement (must use /g flag)
console.log(p.replaceAll(/dog/g, 'monkey'));
