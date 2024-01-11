// The first three stages of a sequence are shown in https://www.codewars.com/kata/589519d1f0902e01af000054/train/javascript

// The blocksize is a by a and a ≥ 1.

// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?


function perimeterSequence(a, n) {
  
  let P = 4 * a;
  n = 3 * P;
  return n;
}

console.log(perimeterSequence(8, 3));
console.log(perimeterSequence(9, 12));
