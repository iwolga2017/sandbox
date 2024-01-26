// Complete the function that receives as input a string, 
// and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function 
// is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct 
// capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param){
  
  let str = param
        .toLowerCase()
        .split(" ")
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(" ");
  
  switch (str) {
      case "Jabroni":
        return "Patron Tequila";
        break;
      case "School Counselor":
        return "Anything with Alcohol";
        break;
      case "Programmer":
        return "Hipster Craft Beer";
        break;
      case "Bike Gang Member":
        return "Moonshine";
        break;
      case "Politician":
        return "Your tax dollars";
        break;
      case "Rapper":
        return "Cristal";
        break;
      default:
        return "Beer";
        break;
  }
}

console.log(getDrinkByProfession("jabrOni"));
console.log(getDrinkByProfession("scHOOl counselor"));
console.log(getDrinkByProfession("bike ganG member"));

