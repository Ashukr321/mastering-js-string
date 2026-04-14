/**
 * @method: String.prototype.substring()
 * @description: Returns the part of the string between the start and end indices, or to the end of the string.
 * Unlike slice(), if start > end, substring() swaps them. Negative indices are treated as 0.
 */

const str = 'Mozilla';

// it is  use to  get the part of the string and it take start and end index 
console.log(str.substring(1,4));
// it take two parameters : start index and end index 
// if the start index is > end index then it swap it index and then return string based on import PropTypes from 'prop-types'
console.log(str.substring(5,1));
// -ve index are treated as 0 index in this methods 

console.log(str.substring(-1,4));
