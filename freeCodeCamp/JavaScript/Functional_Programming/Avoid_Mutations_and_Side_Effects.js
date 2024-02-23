// Fill in the code for the function incrementer so it returns 
// the value of the global variable fixedValue increased by one.

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line

let increase = fixedValue + 1;

return increase;

  // Only change code above this line
}

console.log(incrementer());
console.log(fixedValue);
fixedValue = 10;
console.log(incrementer());
console.log(fixedValue);
