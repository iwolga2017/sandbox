// Complete the square sum function so that it squares each number 
// passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9.

function squareSum(numbers){
  
    return numbers.map(item => Math.pow(item, 2)).reduce((sum, curr) => sum += curr, 0);
  
  }
  
  console.log( squareSum([0, 3, 4, 5]) );
