// Given a string s. You have to return another string such 
// that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

function sortMyString(S) {
    
    let str = S;
    let arr = str.split('');           
    let arr1 = [];
    let arr2 = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (i == 0 || i % 2 == 0) {
        arr1.push(arr[i]);
      } else {
        arr2.push(arr[i]);
      }
    }
     
    let part1 = arr1.join('');
    let part2 = arr2.join('');
    return `${part1} ${part2}`;
  }

  console.log( sortMyString( 'CodeWars') );
  console.log( sortMyString( "YCOLUE'VREER") );