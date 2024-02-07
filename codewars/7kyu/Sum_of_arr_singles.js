// In this Kata, you will be given an array of numbers in which two numbers occur 
// once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
//  and their sum is 15. Every other number occurs twice.

function repeats(arr){
 let  result = arr.filter((item, index) => arr.indexOf(item) ===  arr.lastIndexOf(item));
 return result.reduce((sum, current) => sum + current, 0);
}

console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]));
console.log(repeats([9, 10, 19, 13, 19, 13]));
