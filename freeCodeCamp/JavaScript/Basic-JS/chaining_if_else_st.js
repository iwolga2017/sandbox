// Write chained if/else if statements to fulfill the following conditions:

// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge


function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }
    else if (num < 10) {
        return "Small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    }
    else if (num >=  20) {
        return "Huge";
    }
    else {
        return "Change Me";
    }
}

console.log(testSize(25));
console.log(testSize(16));
console.log(testSize(4));
console.log(testSize(7));
console.log(testSize('jkh'));