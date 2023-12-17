// Add the less than operator to the indicated lines so that the return statements make sense.


function testLessThan(val) {

    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

console.log(testLessThan(3));
console.log(testLessThan(45));
console.log(testLessThan(18));
console.log(testLessThan(100));