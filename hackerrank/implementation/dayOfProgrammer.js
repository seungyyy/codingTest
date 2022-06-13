// https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

function dayOfProgrammer(year) {
  let date = '13.09.' + year;
  if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      date = '12.09.' + year;
    }
  } else if (year === 1918) {
    date = '26.09.' + year;
  } else {
    if (year % 4 === 0) {
      date = '12.09.' + year;
    }
  }
  return date;
}

console.log(dayOfProgrammer(1800));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(2017));