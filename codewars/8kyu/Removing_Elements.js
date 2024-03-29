// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  
  return arr.filter((item, index) => index % 2 === 0);
}
onsole.log(removeSecond([2, 6, 8, 1, 4]))
