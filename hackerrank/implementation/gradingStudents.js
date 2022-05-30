// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
  const result = [];
  grades.forEach((it) => {
    if (it % 5 !== 0) {
      let gradeRound = Math.floor(it / 5) + 1;
      let gradeNumber = gradeRound * 5;
      if (gradeNumber - it < 3 && gradeNumber >= 40) {
        result.push(gradeNumber);
      } else {
        result.push(it);
      }
    } else {
      result.push(it);
    }
  });
  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));