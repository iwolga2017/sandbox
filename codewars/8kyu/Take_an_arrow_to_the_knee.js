// You will be given an array of numbers which can be used using 
// the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method 
// to convert the number to a character. It is recommended to map over
// the array of numbers and convert each number to the corresponding 
// ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a

const ArrowFunc = function(arr) {
    return arr.map(item => String.fromCharCode(item) ).join(''); 
  }

  console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]));
  console.log(ArrowFunc([84,101,115,116]));