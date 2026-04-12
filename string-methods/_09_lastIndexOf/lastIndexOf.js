/**
 * @method: String.prototype.lastIndexOf()
 * @description: Returns the index within the calling string object of the last occurrence of the specified value, 
 * searching backwards from fromIndex. Returns -1 if the value is not found.
 */

const sentence = "The quick brown fox jumps over the lazy dog. The fox is sly.";

// Basic search
console.log(sentence.lastIndexOf("fox")); // 50

// Case-sensitive
console.log(sentence.lastIndexOf("Fox")); // -1

// Search backwards from index 40
console.log(sentence.lastIndexOf("fox", 40)); // 16

// Empty string
console.log(sentence.lastIndexOf("")); // 61 (last possible index)
