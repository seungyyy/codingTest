// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function compareTriplets(a, b) {
  const answer = { a: 0, b: 0 };
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      answer.b = answer.b += 1;
    } else if (a[i] > b[i]) {
      answer.a = answer.a += 1;
    }
  }
  result.push(answer.a);
  result.push(answer.b);
  
  return result
}

console.log(compareTriplets([17, 28, 30],[99, 16, 8] ));