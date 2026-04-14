/**
 * @method: String.prototype.toLowerCase()
 * @description: Returns the calling string value converted to lower case.
 */

const str = "HELLO WORLDI";
console.log(str.toLowerCase());
// this ignore local language specific rule 


// toLowerCase(); methods does't mutate the original string it return the new string 

// toLocalLowerCase()
console.log(str.toLocaleLowerCase("tr"));
// it convert into lowercase based on local language
// 

