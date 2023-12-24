// In the checkSign function, use multiple conditional operators - 
// following the recommended format used in findGreaterOrEqual - 
// to check if a number is positive, negative or zero. The function 
// should return positive, negative or zero.

function checkSing(num) {

    return num > 0 ? "positive"
        : num < 0 ? "negative"
        : "zero";

}

console.log(checkSing(-6));
console.log(checkSing(18));
console.log(checkSing(0));