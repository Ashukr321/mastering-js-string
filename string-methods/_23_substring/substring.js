/**
 * @method: String.prototype.substring()
 * @description: Returns the part of the string between the start and end indices, or to the end of the string.
 * Unlike slice(), if start > end, substring() swaps them. Negative indices are treated as 0.
 */

const str = 'Mozilla';

// Extract from index 1 to 3
console.log(str.substring(1, 3)); // "oz"

// Swaps indices if start > end
console.log(str.substring(3, 1)); // "oz"

// Negative indices treated as 0
console.log(str.substring(-3, 2)); // "Mo" (same as substring(0, 2))

// Start index only
console.log(str.substring(2)); // "zilla"
