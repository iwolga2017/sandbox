// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {

    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(5));
console.log(testGreaterThan(50));
console.log(testGreaterThan(1287));
console.log(testGreaterThan(-9));