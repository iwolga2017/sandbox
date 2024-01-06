// Apply the regex myRegex on the string myString using the .test() method

let myStr = "Hello, World";
let myRegex = /Hello/;
let result = myRegex.test(myStr);

console.log(result);

let str = "There is a great whether today!";
let check = /Word/;
result = check.test(str);

console.log(result);

str = "Nice to meet you Tom!";
check = /Tom/;
result = check.test(str);

console.log(result);

