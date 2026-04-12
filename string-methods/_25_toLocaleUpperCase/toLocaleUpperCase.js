/**
 * @method: String.prototype.toLocaleUpperCase()
 * @description: Returns the calling string value converted to upper case, 
 * according to any locale-specific case mappings.
 */

const city = "istanbul";

// Default upper case
console.log(city.toUpperCase()); // "ISTANBUL"

// Turkish upper case (correctly handles the dot on 'i')
console.log(city.toLocaleUpperCase('tr-TR')); // "İSTANBUL" (with dot on İ)
