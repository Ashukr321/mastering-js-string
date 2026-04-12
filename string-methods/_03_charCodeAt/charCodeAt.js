/**
 * @method: String.prototype.charCodeAt()
 * @description: Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
 * Useful for determining ASCII/Unicode values of characters.
 */

const str = "ABC";

// Code for 'A'
console.log(str.charCodeAt(0)); // 65

// Code for 'B'
console.log(str.charCodeAt(1)); // 66

// Code for 'C'
console.log(str.charCodeAt(2)); // 67

// Out of range index
console.log(str.charCodeAt(100)); // NaN
