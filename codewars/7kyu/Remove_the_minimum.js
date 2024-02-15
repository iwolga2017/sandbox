// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with the lowest index. 
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  if (numbers == null) return [];
  
  let arr = numbers.slice();
  let result = numbers.slice();
  let sortied = arr.sort((a, b) => a - b);
     
  for (let i = 0; i < result.length; i++) {
    if (result[i] == sortied[0]) {
        result.splice(i, 1); break;
        }
  }
      return result;
}
console.log( removeSmallest([2, 2, 2, 1, 2, 1]) );
console.log( removeSmallest([5, 3, 2, 1, 4]) );
