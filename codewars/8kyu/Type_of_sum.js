// Return the type of the sum of the two arguments

function typeOfSum(a, b) {
  
    return typeof(a + b);
  }

  console.log(typeOfSum(3, 5));
  console.log(typeOfSum(0, "2"));
  console.log(typeOfSum(undefined, true));