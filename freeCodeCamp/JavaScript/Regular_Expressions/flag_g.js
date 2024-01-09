// Using the regex starRegex, find and extract both Twinkle words
//  from the string twinkleStar.

// Note
// You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";

let starRegex = /twinkle/gi;

let result = twinkleStar.match(starRegex);

console.log(result);

let str = "Maybe rainy, maybe snow, maybe little,  maybe grow";
let repReg = /maybe/gi;
result = str.match(repReg);

console.log(result);