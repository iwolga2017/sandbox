// Use parseInt() in the convertToInteger function so it converts a binary number to an 
// integer and returns it.

function convertToInteger(str) {

    return parseInt(str, 2);
}

console.log(convertToInteger("16"));
console.log(convertToInteger("7"));
console.log(convertToInteger("10011"));