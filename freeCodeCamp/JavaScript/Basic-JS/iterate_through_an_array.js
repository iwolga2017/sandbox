// Declare and initialize a variable total to 0. Use a for loop to add the value of each
// element of the myArr array to total.

const myArray = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArray.length; i ++) {

    total += myArray[i];
}

console.log(total);