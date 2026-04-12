/**
 * @method: String.prototype.repeat()
 * @description: Constructs and returns a new string which contains the specified number of copies 
 * of the string on which it was called, concatenated together.
 */

const mood = "Happy! ";

// Repeat the string 3 times
console.log(mood.repeat(3)); // "Happy! Happy! Happy! "

// Repeat 0 times
console.log(mood.repeat(0)); // ""

// Repeat with decimals (floored)
console.log(mood.repeat(2.5)); // "Happy! Happy! "

// Range error if negative or infinity
// console.log(mood.repeat(-1)); // Throws RangeError
