/**
 * @method: String.prototype.matchAll()
 * @description: Returns an iterator of all results matching a string against a regular expression, 
 * including capturing groups.
 * The regex MUST have the /g flag.
 */

const str = "test1, test2, test3";
const regex = /test(\d)/g;

const matches = str.matchAll(regex);

for (const match of matches) {
  console.log(`Found: ${match[0]}, Group 1: ${match[1]}`);
}

// Found: test1, Group 1: 1
// Found: test2, Group 1: 2
// Found: test3, Group 1: 3
