// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const appleNum = a;
  const orangeNum = b;
  let aCount = 0,
    oCount = 0;

  for (let i = 0; i < apples.length; i++) {
    if (s <= apples[i] + appleNum && t >= apples[i] + appleNum) {
      aCount++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (s <= oranges[i] + orangeNum && t >= oranges[i] + orangeNum) {
      oCount++;
    }
  }

  console.log(aCount);
  console.log(oCount);
}

console.log(countApplesAndOranges(7, 11, 5, 11, 3, 2, [-2, 2, 1] , [5, -6]));