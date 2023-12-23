// Modify function multiplyAll so that it returns the product of all 
// the numbers in the sub-arrays of arr.

function multiplyAll(arr) {

    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k ++) {
          product = product * arr[i][k];
        }
    }

    return product;
}

console.log( multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) );
console.log( multiplyAll([[1], [2], [3]]) );
console.log( multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) );