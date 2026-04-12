/**
 * @method: String.prototype.padStart()
 * @description: Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. 
 * The padding is applied from the start of the current string.
 */

const fullNumber = '2034399002125581';
const lastFourDigits = fullNumber.slice(-4);

// Pad the start with '*' to mask the credit card number
const maskedNumber = lastFourDigits.padStart(fullNumber.length, '*');
console.log(maskedNumber); // "************5581"

// Pad with leading zeros
const num = "5";
console.log(num.padStart(2, '0')); // "05"
