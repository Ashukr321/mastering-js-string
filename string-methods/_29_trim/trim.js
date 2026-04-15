/**
 * @method: String.prototype.trim()
 * @description: Removes whitespace from both ends of a string and returns a new string, without modifying the original string. 
 * Whitespace includes space, tab, no-break space, and all line terminator characters.
 */

const greeting = '   Hello world!   ';

// trim methods : this simple remove the whiteSpace:  from both end start and end 
// trimStart
// trimEnd

console.log(greeting.trim());
console.log(greeting.trimStart());
console.log(greeting.trimEnd());

// trim method is use for removing the extra spaces from the string : 
// trimStart:  remove the extra spaces from start of the string :
// trimEnd :  remove the extra space from end of the string 
