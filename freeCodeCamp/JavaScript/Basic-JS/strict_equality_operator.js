// Use the strict equality operator in the if statement so the function will return 
// the string Equal when val is strictly equal to 7.

function testStrict(val) {

    if(val === 7) {
        return "Equal"
    }

    return "Not Equal"
}

console.log(testStrict(7));
console.log(testStrict(25));