// Apply the .match() method to extract the string coding

// "string".match(/regex/); is opposite
// /regex/.test("string")


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /'coding'/;
let result = extractStr.match(codingRegex);

console.log(result);

let myStr = "Good morning, dear ladies and gentlemen";
let myRegex = /ladies/;
result = myStr.match(myRegex);

console.log(result);