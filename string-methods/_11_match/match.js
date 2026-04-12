/**
 * @method: String.prototype.match()
 * @description: Retrieves the result of matching a string against a regular expression.
 * Returns an array of matches or null if no match is found.
 */

const str = "The rain in SPAIN stays mainly in the plain";

// Basic match (string)
console.log(str.match("ain")); // ["ain", index: 5, input: "...", groups: undefined]

// Match with regex (case-insensitive)
console.log(str.match(/ain/i)); // same as above

// Global match (returns all matches)
console.log(str.match(/ain/g)); // ["ain", "ain", "ain"]

// No match
console.log(str.match(/xyz/)); // null
