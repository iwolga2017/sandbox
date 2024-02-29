// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  
    let startNum = arr[0];
    let endNum = arr[1];
    let numCount = Math.abs(startNum - endNum) + 1;
     
    return ((startNum + endNum) * numCount) / 2;
  }
  
  console.log( sumAll([5, 1]) );