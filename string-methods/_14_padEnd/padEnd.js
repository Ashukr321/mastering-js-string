/**
 * @method: String.prototype.padEnd()
 * @description: Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. 
 * The padding is applied from the end of the current string.
 */

const str1 = 'Breaded Mushrooms';

// Pad with dots to reach length 25
console.log(str1.padEnd(25, '.')); // "Breaded Mushrooms........"

const str2 = '200';

// Pad with spaces by default
console.log(str2.padEnd(5)); // "200  "
