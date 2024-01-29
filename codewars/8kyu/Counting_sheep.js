// Consider an array/list of sheep where some sheep may be 
// missing from their place. We need a function that 
// counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined



function countSheeps(sheep) {
        
    let sum = 0;
    
    for (let she of sheep) {
      she == true ? sum++ : sum;
    }
  return sum;
}

  console.log(countSheeps([undefined,null,false,true]));
  console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));