// Given a logarithm base X and two values A and B, return a sum of logratihms
//  with the base X: log 
// X
// ​
//  A+log 
// X
// ​
//  B.


function logs(x , a, b){

    return (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x));
  }

  console.log(logs(10, 2, 3));
  console.log(logs(5, 2, 3));
  