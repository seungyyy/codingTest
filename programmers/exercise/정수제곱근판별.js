// https://programmers.co.kr/learn/courses/30/lessons/12934
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
function solution(n) {
  var answer = 0;
  answer = Math.sqrt(n);
  answer = Number.isInteger(answer) ? Math.pow(answer + 1, 2) : -1;

  return answer;
}

console.log(solution(121))
console.log(solution(3))