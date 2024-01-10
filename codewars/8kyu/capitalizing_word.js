// Your coworker was supposed to write a simple helper function to capitalize a string 
// (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper 
//   function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

function capitalizeWord(word) {
  
  if (typeof(word) === "string" && word !== "") {
    
    if (word[0] === word.toUpperCase()) {
      
      return word;
    } else {
      
      return word[0].toUpperCase() + word.slice(1);
    }
    
  }
  return "Please, write a word";
}
console.log(capitalizeWord("name"));
console.log(capitalizeWord("Melon"));
console.log(capitalizeWord("apple"));
