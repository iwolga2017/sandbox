// One of the simplest and most widely known ciphers is a Caesar cipher, 
// also known as a shift cipher. In a shift cipher the meanings of the 
// letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the 
// letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and 
// returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic 
// character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    
    let regExp = /[A-M]/;
    let regExp2 = /[N-Z]/;
    let arr = [];
    
     for (let i = 0; i < str.length; i++) { 
        if (regExp.test(str[i])) {          
          arr[i] = str.charCodeAt(i)+13; 
        } else if (regExp2.test(str[i])) {  
          arr[i] = str.charCodeAt(i)-13;
        } else if (!regExp.test(str[i]) && !regExp2.test(str[i])) { 
          arr[i] = str.charCodeAt(i); //if true, push to holder as is
        }
       } return String.fromCharCode.apply(null, arr); 
  }

  console.log(rot13("SERR PBQR PNZC"));
  