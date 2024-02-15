// Your function takes in parameter an array of integers nums and a strictly-positive integer k.
// Imagine a sliding window of size k which is moving from left to right in the array. 
// You can only see the k elements that are in the window. The sliding window moves 
// right by one position until it is no longer possible to have k elements in the window. 
// You have to return an array of the maximums for each successive window, from left to right.

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7      3
// 1 [3  -1  -3] 5  3  6  7       3
// 1  3 [-1  -3  5] 3  6  7       5
// 1  3  -1 [-3  5  3] 6  7       5
// 1  3  -1  -3 [5  3  6] 7       6
// 1  3  -1  -3  5 [3  6  7]      7

// (nums = [1,3,-1,-3,5,3,6,7], k = 3) ---> [3, 3, 5, 5, 6, 7]

function sliding(nums, k) {
  let result = [];
  
  if (nums.length < k) return [];
     
  for (let i = 0; i <= nums.length - k; i++) {
    let  max = nums.slice(i, i + k).reduce((item, count) => Math.max(item, count));
     result.push(max)
  }
    return result;
}

console.log(sliding([1,3,-1,-3,5,3,6,7], 3));
console.log(sliding([-7, -8, 7, 5, 7, 1, 6, 0], 4));
