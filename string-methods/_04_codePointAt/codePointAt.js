/**
 * @method: String.prototype.codePointAt()
 * @description: Returns a non-negative integer that is the Unicode code point value of the character starting at the given index.
 * Unlike charCodeAt(), codePointAt() can handle 4-byte UTF-16 surrogate pairs (like emojis).
 */

const emoji = '😀';
console.log(emoji.length); // 2 (surrogate pair)

// charCodeAt only gets the first code unit
console.log(emoji.charCodeAt(0)); // 55357

// codePointAt gets the full Unicode code point
console.log(emoji.codePointAt(0)); // 128512
