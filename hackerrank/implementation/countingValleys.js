// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function solution(steps, path) {
  let count = 0;
  let answer = 0;
  let paths = path.split('');

  for (let i = 0; i < steps; i++) {
    if (paths[i].toLowerCase() === 'd' && count === 0) {
      count--;
      answer++;
    } else if (paths[i].toLowerCase() === 'd') {
      count--;
    } else {
      count++;
    }
  }

  return answer;
}

console.log(solution(8, 'UDDDUDUU'));