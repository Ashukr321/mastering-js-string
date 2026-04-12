/**
 * @method: String.prototype.search()
 * @description: Executes a search for a match between a regular expression and this String object.
 * Returns the index of the first match or -1 if no match is found.
 */

const str = "The quick brown fox jumps over the lazy dog.";

// Search for "fox" using regex
console.log(str.search(/fox/)); // 16

// Case-insensitive search
console.log(str.search(/Fox/i)); // 16

// No match found
console.log(str.search(/xyz/)); // -1
