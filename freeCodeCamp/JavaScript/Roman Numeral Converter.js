// Convert the given number into a roman numeral.
// Roman numerals	Arabic numerals
// M	 1000
// CM	 900
// D	 500
// CD	 400
// C	 100
// XC	 90
// L	 50
// XL	 40
// X	 10
// IX	 9
// V	 5
// IV  4
// I	 1
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
 let str = num.toString();
 let result = [];
  let res1 = '';
  let res2 = '';
  let res3 = '';
  let res4 = '';
  
  if (str.length == 0){
  result = [];
    
  } else if (str.length > 0){
    switch (str[str.length-1]){
    case "1" :
      res1 = "I";
      break;
    case "2" :
      res1 = "II";
      break;
    case "3" :
      res1 = "III";
      break;
    case "4" :
      res1 = "IV";
      break;
    case "5" :
      res1 = "V";
      break;
    case "6" :
      res1 = "VI";
      break;
    case "7" :
      res1 = "VII";
      break;
    case "8" :
      res1 = "VIII";
      break;
    case "9" :
      res1 = "IX";
      break;
  }
    switch (str[str.length-2]){      
    case "1" :
      res2 = "X";
      break;
    case "2" :
      res2 = "XX";
      break;
    case "3" :
      res2 = "XXX";
      break;
    case "4" :
      res2 = "XL";
      break;
    case "5" :
      res2 = "L";
      break;
    case "6" :
      res2 = "LX";
      break;
    case "7" :
      res2 = "LXX";
      break;
    case "8" :
      res2 = "LXXX";
      break;
    case "9" :
      res2 = "XC";
      break;
    }
    switch (str[str.length-3]){
    case "1" :
      res3 = "C";
      break;
    case "2" :
      res3 = "CC";
      break;
    case "3" :
      res3 = "CCC";
      break;
    case "4" :
      res3 = "CD";
      break;
    case "5" :
      res3 = "D";
      break;
    case "6" :
      res3 = "DC";
      break;
    case "7" :
      res3 = "DCC";
      break;
    case "8" :
      res3 = "DCCC";
      break;
    case "9" :
      res3 = "CM";
      break;
    }
    switch (str[str.length-4]){      
    case "1" :
      res4 = "M";
      break;
    case "2" :
      res4 = "MM";
      break;
    case "3" :
      res4 = "MMM";
      break;
    }
  }
result.push(res4,res3,res2,res1);
  return result.join("");
}
 console.log(convertToRoman(36));
