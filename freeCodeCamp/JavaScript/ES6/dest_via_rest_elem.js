// Use a destructuring assignment with the rest syntax to emulate
//  the behavior of Array.prototype.slice(). removeFirstTwo() 
//  should return a sub-array of the original array list with
//   the first two elements omitted.

function removeFirstTwo(list) {

    const [a, b, ...arr] = list;
    return arr;
}

console.log(removeFirstTwo([1, 5, 9, 18]));
console.log(removeFirstTwo([541, 124, 1087, 2015]));