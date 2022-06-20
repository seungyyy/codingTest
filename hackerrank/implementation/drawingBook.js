// https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true

function solution(n, p) { 
  if (p === n) return 0;

  let count = 0;
  let page = 1;
  while (page < p) {
    count++;
    page += 2;
  }
  if (n % 2 !== 0) {
    page = n - 1;
  } else {
    page = n;
  }

  let countTwo = 0;
  while (page > p) {
    countTwo++;
    page -= 2;
  }

  if (count < countTwo) return count;
  else return countTwo;
}

console.log(solution(5, 3))
console.log(solution(6, 2))
console.log(solution(5, 4))