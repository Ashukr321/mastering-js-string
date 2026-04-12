/**
 * @method: String.prototype.split()
 * @description: Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
 */

const str = "apple,banana,orange,kiwi";

// Split by comma
const fruits = str.split(",");
console.log(fruits); // ["apple", "banana", "orange", "kiwi"]

// Split into characters (empty string separator)
const characters = "Hello".split("");
console.log(characters); // ["H", "e", "l", "l", "o"]

// Limit the number of splits
const firstTwo = str.split(",", 2);
console.log(firstTwo); // ["apple", "banana"]

// Split with regex (one or more spaces)
const sentence = "Hello    world, this is  JS";
const words = sentence.split(/\s+/);
console.log(words); // ["Hello", "world,", "this", "is", "JS"]
