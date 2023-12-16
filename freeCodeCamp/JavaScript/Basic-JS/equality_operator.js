// Add the equality operator to the indicated line so that the function 
// will return the string Equal when val is equivalent to 12.

function testEqual(val) {

    if (val == 12) {
        return "Equal";
    }
        return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));