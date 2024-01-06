// Complete the regex petRegex to match the pets dog, cat, bird, or fish

let petStr = "James has a pat cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petStr);

console.log(result);