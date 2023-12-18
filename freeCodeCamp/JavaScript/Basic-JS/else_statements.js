// Combine the if statements into a single if/else statement.

function testElse(val) {

    let result;

    if (val > 5) {

        result = "Bigger than 5";
    } else {

        result = "5 or Smaller";
    }

    return result;

}

console.log(testElse(24));
console.log(testElse(4));