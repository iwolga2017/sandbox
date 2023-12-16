// Add the inequality operator != in the if statement 
// so that the function will return the string Not Equal
//  when val is not equivalent to 99.

function testNotEqual(val) {

    if (val != 99) {

        return "Not Equal";
    }

        return"Equal";
}

console.log(testNotEqual(33));
console.log(testNotEqual(99));
console.log(testNotEqual(12));