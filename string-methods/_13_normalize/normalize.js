/**
 * @method: String.prototype.normalize()
 * @description: Returns the Unicode Normalization Form of the string.
 * This is useful for comparing strings that look identical but have different Unicode representations.
 */

const name1 = '\u004E\u0303'; // "N" with a tilde
const name2 = '\u00D1';      // "Ñ"

// They look the same but are not equal
console.log(name1 === name2); // false

// Normalize both to NFC (Canonical Decomposition, followed by Canonical Composition)
console.log(name1.normalize() === name2.normalize()); // true
