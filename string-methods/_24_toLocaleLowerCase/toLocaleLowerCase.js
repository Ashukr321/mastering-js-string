/**
 * @method: String.prototype.toLocaleLowerCase()
 * @description: Returns the calling string value converted to lower case, 
 * according to any locale-specific case mappings.
 * Most useful for languages like Turkish (e.g., handling the dot on 'i').
 */

const city = "ISTANBUL";

// Default lower case
console.log(city.toLowerCase()); // "istanbul"

// Turkish lower case (correctly handles the dotted/dotless i)
console.log(city.toLocaleLowerCase('tr-TR')); // "istanbul" (with dot on i)

const city2 = "I";
console.log(city2.toLowerCase()); // "i"
console.log(city2.toLocaleLowerCase('tr-TR')); // "ı" (dotless i)
