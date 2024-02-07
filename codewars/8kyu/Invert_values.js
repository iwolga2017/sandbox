// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
   
  if (array.length < 1) {
    return []
  }
  let result = array.slice();
  for (let i = 0; i < result.length; i++) {
    result[i] *=(-1);
  }
    return  result;
}

console.log([1,-2,3,-4,5]);
