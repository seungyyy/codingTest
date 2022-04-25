// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

function diagonalDifference(arr) {
  let a = 0;
  let b = 0;
  arr.forEach((el, index) => {
    a += el[index];
  });
  arr.forEach((el, index) => {
    b += el[arr.length - 1 - index];
  });
  return Math.abs(a - b);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));