/**
 * @method: String.prototype.at()
 * @description: Takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset.
 * Allows for negative integers, which count back from the last string character.
 */

const greeting = "Hello, world!";

// Positive index (same as greeting[0])
console.log(greeting.at(0)); // "H"

// Negative index (counts from end)
console.log(greeting.at(-1)); // "!"
console.log(greeting.at(-2)); // "d"

// Undefined index
console.log(greeting.at(100)); // undefined
