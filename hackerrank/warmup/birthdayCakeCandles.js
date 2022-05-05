// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

function birthdayCakeCandles(candles) {
  const max = Math.max(...candles);
  const maxCandles = candles.filter((el) => el === max);
  return maxCandles.length;
}

console.log(birthdayCakeCandles([2, 1, 3, 3]))
console.log(birthdayCakeCandles([4, 4, 1, 3]))