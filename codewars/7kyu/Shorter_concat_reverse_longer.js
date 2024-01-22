// Given 2 strings, a and b, return a string of the form: 
// shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put
// as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null 
// (In C# strings may also be null. Treat them 
// as if they are empty.).
// If a and b have the same length treat a as 
// the longer producing b+reverse(a)+b



function shorterReverseLonger(a,b){
  
    let longer = a.length > b.length ? a:
                 a.length == b.length ? a: 
                 b;
    let shorter = a.length > b.length ?  b:
                  a.length == b.length ? b:
                  a;


    // let reverse = longer.split("").reverse().join("");       
    // return `${shorter}${reverse}${shorter}.`;

    let rev = longer.split("").reverse();
    let shortArr = shorter.split("");

    return shortArr.concat(rev, shortArr).join("");
  }

  console.log(shorterReverseLonger("first", "abcde"));
  console.log(shorterReverseLonger("hello", "bau"));
  console.log(shorterReverseLonger("fghi", "abcde"));