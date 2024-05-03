// Create an OR function that takes a list of boolean values and runs OR against all of them, 
// without ( depending on language ) the or keyword or the || operator,.

// There will be between 0 and 6 elements ( inclusive ).
// Return None, nil or a similar empty value for an empty list.

function alternate(items) {
  
  if (items.length < 1) return null;
  
  let result = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i] === true) result = true;
  }
  
  return result;
}

console.log(alternate([true, false, true]));
