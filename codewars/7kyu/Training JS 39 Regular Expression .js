// This time you do not need coding in function. 
// You just need to write a regular expression that 
// matches the specified numeric string. I've given 
// the regular expression name: "regex", please don't 
// modify the name.
// According to the following rules:
// The numeric string first digit should be "9".
// At the end of the number string there are at 
// least four "0".
// It can also be a negative number(This means 
// that the string may be started by "-", 
// maybe not)

let regex = /^-?9\d*0{4,}$/


console.log(regex.test("-91230000"));
console.log(regex.test("-90000"));
console.log(regex.test("91230"));
console.log(regex.test("91 230"));