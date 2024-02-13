// DESCRIPTION:
// For this kata you will have to forget how to add two numbers.
// It can be best explained using the following meme:
// 1 6 +  8 = 2 14,   2 6 + 3 9 = 5 15

function add(num1, num2) {
  let arr1 = num1.toString().split('').map(i => +i).reverse();
  let arr2 = num2.toString().split('').map(i => +i).reverse();
    
  let result = [];
  let max = Math.max(arr1.length, arr2.length);
    
  for (let i = 0; i < max; i++) {
    result.unshift( Number(arr1[i] || 0) + (Number(arr2[i]) || 0) );
  }
    return +result.join('');
}

console.log(add(122, 81));
console.log(add(0, 1));
