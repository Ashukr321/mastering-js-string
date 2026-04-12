/**
 * @method: String.prototype.indexOf()
 * @description: Returns the index within the calling string object of the first occurrence of the specified value, 
 * starting the search at fromIndex. Returns -1 if the value is not found.
 */

const sentence = "The quick brown fox jumps over the lazy dog.";

// Basic search
console.log(sentence.indexOf("fox")); // 16

// Case-sensitive
console.log(sentence.indexOf("Fox")); // -1

// Start from a specific index
console.log(sentence.indexOf("the", 10)); // 31

// Searching for an empty string
console.log(sentence.indexOf("")); // 0
