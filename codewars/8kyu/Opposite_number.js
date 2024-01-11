// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  
  if (number >= 0) {
    return -number;
  } else {
    return Math.abs(number);
  }
}

console.log(opposite(54));
console.log(opposite(-98));
