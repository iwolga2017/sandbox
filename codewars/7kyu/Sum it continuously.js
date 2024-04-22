// Make a function "add" that will be able to sum elements of 
// list continuously and return a new list of sums.

// For example:

// add [1,2,3,4,5] == [1, 3, 6, 10, 15], 
// because it's calculated like 
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]

function add(arr) {
    
    return arr.reduce((acc, val, i) => {
        acc.push(acc[i - 1] ? acc[i - 1] + val : val);
        return acc;
      }, []);
  }

  console.log( add([1,2,3,4,5]) );
  