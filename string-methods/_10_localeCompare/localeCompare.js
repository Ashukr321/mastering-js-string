/**
 * @method: String.prototype.localeCompare()
 * @description: Returns a number indicating whether a reference string comes before, after, 
 * or is the same as the given string in sort order.
 * Returns -1 if the string comes before, 1 if after, and 0 if equal.
 */

const a = 'réservé';
const b = 'reserve';

// In some locales, "réservé" is considered greater than "reserve"
console.log(a.localeCompare(b)); // 1

// Comparison with locales and options
console.log('a'.localeCompare('z', 'en')); // -1 (a comes before z)
console.log('z'.localeCompare('a', 'en')); // 1 (z comes after a)

// Case-insensitive comparison using sensitivity option
console.log('a'.localeCompare('A', 'en', { sensitivity: 'base' })); // 0 (equal)
