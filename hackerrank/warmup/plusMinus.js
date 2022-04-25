// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

function plusMinus(arr) {
  const len = arr.length;
  const temp = [[], [], []];
  for (let i = 0; i < len; i++) {
    if (arr[i] < 0) {
      temp[1].push(1);
    } else if (arr[i] > 0) {
      temp[0].push(1);
    } else if (arr[i] === 0) {
      temp[2].push(1);
    }
  }
  temp.forEach((el) => console.log((el.length / len).toPrecision(5)));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));