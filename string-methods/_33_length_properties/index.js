// let userName = "Ashutosh"; // 8 
// // console.log(userName.length); // 8 
// // // properties :   eg length
// // // methods () : bracket use in the methods  , toUppercase()
 
// // // indexing : index start from 0 , 
// // console.log(userName.at(0)); //'A'

// // console.log(userName.at(userName.length-2));


// // length✅
// // at() ✅
// // charAt(); ✅
// // toUppercase();✅
// // toLowercase();✅




// console.log(userName.at(2));

// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());


// // ----------- includes methods ----------- 
// let user= "Amit";
// console.log(user.includes('i'));
// // includes method return true and false

// // includes method is caseInsensitive methods 
// //  widely use in the react real application

// // --------------- trim()----- 
// let name = "   Neeraj   ";
// console.log(name.trim());
// console.log(name);

// console.log(name.trimStart());
// console.log(name.trimEnd());
// /*

//  remove the extra spaces from start and end : 
//  trimStart(); // remove extra spaces from starting of the string 
//  trimEnd(); this methods remove spaces from end of the string 
//  // trim(); remove the extra spaces from both side : starting and end side
// */


// properties : length : jo ki kitna number of character ko  return krta tha 
// string: index se character ko access kr skte hai 
//methods 


// 1. at()
// 2. charAt();
// 3. toLowerCase();
// 4. toUpperCase();
// 5. trim();
// 6. trimStart();
// 7. trimEnd();

// 8. includes : 
// Neeraj : raj , r , j , n , e , ee , re

// const userName = "ashutosh";
// console.log(userName.includes("e")) // false 

// let search = "A"

// 9. toString()
let num = 12; // number 
console.log(typeof num.toString());
console.log(typeof num);

var a = false;
console.log( typeof a.toString());
console.log(typeof a )

// primitive data type :  immutable : store in stack 

// 1. number 
// 2. undefiend 
// 3. null 
// 4. boolean :   true and false 
// 5. bigInt : 12n :n -> big import ''
// 6. string 
// 7. symbol 

// toString(); 
// subString();
// {1,2,3,4,5};
// subset: {1,2};
// subset: part of set maths 
// --------------
// string : 
let name = "Ashutosh kumar";
//indexing : 0 

console.log(name.length);

console.log(name.substring(1,5)); 
// 
// endIndex 2 : 2-1; 
// substring(startIndex,endIndex);
// startIndex: included 
// endIndex : excluded 

console.log(name.substring(1));

// console.log(name.substring(30));

console.log("negative index  substring :",name.substring(-3))