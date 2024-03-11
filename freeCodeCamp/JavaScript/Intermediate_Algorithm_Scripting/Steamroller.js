// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    let flattenedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenedArr.push(...steamrollArray(arr[i]));
        } else {
        flattenedArr.push(arr[i]);
        }
        
    }
    return flattenedArr;
}

console.log(steamrollArray( [1, [2], [3, [[4]]]]) );
