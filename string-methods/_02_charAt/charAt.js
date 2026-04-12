/**
 * @method: String.prototype.charAt()
 * @description: Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
 * Indices start at 0. If the index is out of range, it returns an empty string "".
 */

const sentence = "JavaScript is fun!";

// Valid index
console.log(sentence.charAt(0)); // "J"
console.log(sentence.charAt(4)); // "S"

// Out of range index
console.log(sentence.charAt(100)); // "" (Empty string)

// Default index (is 0 if not provided)
console.log(sentence.charAt()); // "J"
