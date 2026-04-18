let userName = "Ashutosh"; // 8 
// console.log(userName.length); // 8 
// // properties :   eg length
// // methods () : bracket use in the methods  , toUppercase()
 
// // indexing : index start from 0 , 
// console.log(userName.at(0)); //'A'

// console.log(userName.at(userName.length-2));


// length✅
// at() ✅
// charAt(); ✅
// toUppercase();✅
// toLowercase();✅




console.log(userName.at(2));

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());


// ----------- includes methods ----------- 
let user= "Amit";
console.log(user.includes('i'));
// includes method return true and false

// includes method is caseInsensitive methods 
//  widely use in the react real application

// --------------- trim()----- 
let name = "   Neeraj   ";
console.log(name.trim());
console.log(name);

console.log(name.trimStart());
console.log(name.trimEnd());
/*

 remove the extra spaces from start and end : 
 trimStart(); // remove extra spaces from starting of the string 
 trimEnd(); this methods remove spaces from end of the string 
 // trim(); remove the extra spaces from both side : starting and end side
 
*/

