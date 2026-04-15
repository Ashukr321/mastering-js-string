/**
 * @method: String.prototype.valueOf()
 * @description: Returns the primitive value of a String object.
 */

const stringObj = new String("Hello");

// valueOf() gets the underlying primitive string value
console.log(stringObj.valueOf()); // "Hello"

// Compare String object with its primitive value
console.log(stringObj === "Hello"); // false (object vs primitive)
console.log(stringObj.valueOf() === "Hello"); // true (primitive vs primitive)


// we already seen string object to convert primitive string using toString methods : 
// similarly we can do the same by using valueOf() methods 
