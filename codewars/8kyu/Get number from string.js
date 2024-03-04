// Write a function which removes from string all non-digit 
// characters and parse the remaining to number. 
// E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    
    return +s.match(/\d/g).join("");
  }

  console.log(getNumberFromString("this is number: 7"));
  console.log(getNumberFromString("123"));
  