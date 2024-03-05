// Your task is simply to count the total number of lowercase letters in a string.
// Examples
// "abc" ===> 3
// "abcABC123" ===> 3
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
// "" ===> 0;
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
    
  let result = str.match(/[a-z]/g);
  return (result || []).length;
}

console.log(lowercaseCount("abcABC123"));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));
console.log(lowercaseCount(""));
