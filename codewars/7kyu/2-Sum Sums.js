// There is an array of unique integers.
// The task is to find the sum of all targets in the 
// specific range[from, to), which has a pair in the array,
// such that sum of the pair equals to the target.
// Example
// Array = [2, 4, 6, 10], target range is[6, 10)
// target = 6  => (2, 4)
// target = 7  =>  no pair
// target = 8  => (2, 6)
// target = 9  =>  no pair
    // So the result is: 6 + 8 = 14
// Notes
// Both elements of the pair must be unique
// Each target will be counted once, even though 
// there may exist multiple pairs which add up to it
// Your solution will be tested for performance

function sumOfTargetPairs(arr, from, to) {
    const set = new Set(arr);
    let sum = 0;
  
    for (let target = from; target < to; target++) {
      let found = false;
      for (let num of set) {
        const complement = target - num;
        if (num !== complement && set.has(complement) && !found) {
          found = true;
          break;
        }
      }
      if (found) {
        sum += target;
      }
    }
  
    return sum;
  }

  console.log(sumOfTargetPairs([2, 4, 6, 10], 6, 10));
  console.log(sumOfTargetPairs([3, 5, 9, 15], 6, 20));
  