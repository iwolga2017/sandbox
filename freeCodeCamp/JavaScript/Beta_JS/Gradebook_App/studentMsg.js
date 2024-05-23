function studentMsg(totalScores, studentScore) {
    function getAverage(totalScores) {
      return totalScores.reduce((sum, score) => sum += score, 0) / totalScores.length;
    }
    let classAve = getAverage(totalScores);
  
    function getGrade(studentScore) {
      if (studentScore === 100) {
       return "A++";
     } else if (studentScore >= 90 && studentScore <= 99) {
       return "A";
     } else if (studentScore >= 80 && studentScore <= 89) {
       return "B";
     } else if (studentScore >= 70 && studentScore <= 79) {
       return "C";
     } else if (studentScore >= 60 && studentScore <= 69) {
       return "D";
     } else if (studentScore >= 0 && studentScore <= 59) {
       return "F";
     }
   }
   let grade = getGrade(studentScore);
   return getGrade(studentScore) === "F" ? `Class average: ${classAve}. Your grade: ${grade}. You failed the course.` : 
   `Class average: ${classAve}. Your grade: ${grade}. You passed the course.`;
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));