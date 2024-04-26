// Consider a sequence of integers xs, and a target integer n. Your task is to write a 
// function which counts how many combinations of indexes of xs meet two rules:

// The size of the combination must be 1 less than the size of xs
// The sum of elements corresponding to the indexes must equal n
// For example:

// xs = [5, 0, 0, 2], n = 7
// All combinations of indexes (of size 3)
// {0, 1, 2} -> 5 + 0 + 0 = 5
// {0, 1, 3} -> 5 + 0 + 2 = 7
// {0, 2, 3} -> 5 + 0 + 2 = 7
// {1, 2, 3} -> 0 + 0 + 2 = 2
// Only 2 combinations match the target -> Answer = 2

function numCombo(arr, num){
  
  const size = arr.length - 1;
  let count = 0;

  function backtrack(start, sum, combination) {
    if (combination.length === size) {
      if (sum === num) {
        count++;
      }
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combination.push(i);
      backtrack(i + 1, sum + arr[i], combination);
      combination.pop();
    }
  }
  backtrack(0, 0, []);
  return count;
}

console.log(numCombo([2, 0, 0, 0, 1], 2))
