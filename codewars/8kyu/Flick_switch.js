// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]


function flickSwitch(arr){
  let switchOn = true;
  let result = [];
      
  for (let word of arr) {
        
    if (word == 'flick') {
      switchOn = !switchOn;
      result.push(switchOn);
    } else {
      result.push(switchOn);
    }
  }
  
  return result;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
