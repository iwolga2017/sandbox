// Write a function that merges two sorted arrays 
// into a single one. The arrays only contain integers. 
// Also, the final outcome must be sorted and not have 
// any duplicate.

function mergeArrays(a, b) {
    let merged  = a.concat(b)
    return Array.from(new Set(merged)).sort((a, b) => a - b)
    
   }
   
   console.log(  mergeArrays([2, 4, 8], [2, 4, 6]) )