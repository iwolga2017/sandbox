// Write a regex fccRegex to match freeCodeCamp, no matter its case.
// Your regex should not match any abbreviations or variations with spaces.

let myStr = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myStr);

console.log(result);

myStr = "iAmHappy";
let happyRegex = /iamhappy/i;
result = happyRegex.test(myStr);

console.log(result);