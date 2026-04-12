/**
 * @description: Template Literals
 * 
 * Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, 
 * string interpolation with embedded expressions, and special constructs called tagged templates.
 */

const name = "John";
const age = 25;

// Interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Multi-line strings
const multiLine = `This is a
multi-line string
using template literals.`;
console.log(multiLine);

// Expression interpolation
const sum = `The sum of 2 + 2 is ${2 + 2}`;
console.log(sum);
