// The compareEquality function in the editor compares two values 
// using the equality operator. Modify the function so that it 
// returns the string Equal only when the values are strictly equal.

function compareEquality(a, b) {

    if (a === b) {
        
        return "Equal";
    }

    return "not Equal";
}

console.log(compareEquality(12, '12'));
console.log(compareEquality(10, 10));
console.log(compareEquality(25, 14));