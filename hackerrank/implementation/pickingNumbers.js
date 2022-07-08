// https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true

function solution(a) { 
  const leng = Math.max(...a) + 1;

  const arr = Array(leng).fill(0);
  a.forEach((v) => {
    arr[v]++;
  });

  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result = Math.max(result, arr[i] + arr[i + 1]);
  }
  return result;
}

console.log(solution([4, 6, 5, 3, 3, 1]))
