// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0.


function catchSignChange(arr) {
  
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
      
        if ((arr[i] >= 0 && arr[i + 1] < 0) || (arr[i] < 0 && arr[i + 1] >= 0)) {
          count ++;
        }
      }
    return count;
  }

  console.log(catchSignChange([]));
  console.log(catchSignChange([1,3,4,5]));
  console.log(catchSignChange([1,-3,-4,0,5]));