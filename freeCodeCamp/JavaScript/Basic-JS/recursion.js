// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr

function sum(arr, n) {
  if (n <= 0) {
    return 0; 
  } else if (n == 1) {
    return arr[0];
  }
    return sum(arr, n-1) + arr[n-1];
}

console.log(sum([2, 5, 6, 9], 3));
console.log(sum([1, 5, 9, 6, 9], 4));
