/**
 * @method: String.prototype.includes()
 * @description: Determines whether one string may be found within another string, returning true or false.
 * It's case-sensitive.
 */

const sentence = "The quick brown fox jumps over the lazy dog.";

// Basic search
console.log(sentence.includes("fox")); // true

// Case sensitivity
console.log(sentence.includes("Fox")); // false

// Search with start position
console.log(sentence.includes("The", 10)); // false (search starts at index 10)
