// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){

  let arr = x.split(' ');
  
  return arr.join('');
  
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("ололо 5467 до 5467"));
