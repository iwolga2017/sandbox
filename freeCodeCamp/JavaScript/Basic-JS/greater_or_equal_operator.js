// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.


function greaterOrEqual(val) {

    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

console.log(greaterOrEqual(525));
console.log(greaterOrEqual(14));
console.log(greaterOrEqual(10));
console.log(greaterOrEqual(5));