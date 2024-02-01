// We have defined a variable, myNestedArray, set equal 
// to an array. Modify myNestedArray, using any combination 
// of strings, numbers, and booleans for data elements, so 
// hat it has exactly five levels of depth (remember, the 
// outer-most array is level 1). Somewhere on the third 
// level, include the string deep, on the fourth level, 
// include the string deeper, and on the fifth level, 
// include the string deepest.

let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, [false, [6, true, 'deeper']], 2, 3, 'complex', 'nested'],
    ['loop', 'shift', ['deep'], 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, ['right', 'tree', [6, 10, ['deepest']]],'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
  ];

  console.log(myNestedArray[0][3][1][2]);
  console.log(myNestedArray[1][2][0]);
  console.log(myNestedArray[3][2][2][2][0]);
  
