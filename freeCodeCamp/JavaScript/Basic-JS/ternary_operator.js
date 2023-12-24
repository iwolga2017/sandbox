// Use the conditional operator in the checkEqual function
//  to check if two numbers are equal or not. The function should 
//  return either the string Equal or the string Not Equal.


function checkEqual(a, b) {

  return  a == b ? "Equal" : "Not Equal";
}

console.log(checkEqual(2, 9));
console.log(checkEqual("3", 3));
console.log(checkEqual(98, 98));