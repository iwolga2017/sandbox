// Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff

function switchOfStaff(val) {
  let answer = "";

  switch (val) {
    case "a": 
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default: 
      answer = "stuff";
      break;
}
  return answer;
}
console.log(switchOfStaff(1));
console.log(switchOfStaff("d"));
console.log(switchOfStaff("b"));
