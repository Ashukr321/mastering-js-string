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
