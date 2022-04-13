function solution(left, right) {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    if (num % Math.sqrt(num) === 0) {
      answer -= num;
    } else {
      answer += num;
    }
  }
  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));