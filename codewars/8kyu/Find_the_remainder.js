// Write a function that accepts two integers and 
// returns the remainder of dividing the larger value 
// by the smaller value.

// Division by zero should return NaN

function remainder(n, m){
        
    if (n > m) {
      return n % m;
    }
      
    else if (m > n) {
      return m % n;
    }
    
    else if (n > 0 && m === 0) { 
     return NaN;
    }
    
    else if (m > 0 && n === 0) { 
     return NaN;
    }
            
  }

  console.log(remainder(1, 0));
  console.log(remainder(5, 2));
  console.log(remainder(10, 4));