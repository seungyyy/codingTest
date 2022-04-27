// https://programmers.co.kr/learn/courses/30/lessons/68935
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
// 답을 도출하는 과정은 다음과 같습니다.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 45	1200	0021	7

function solution(n) {
  let answer = [...n.toString(3)].reverse().join('');

  return parseInt(answer, 3);
}

console.log(solution(45))
console.log(solution(125))