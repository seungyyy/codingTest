// https://programmers.co.kr/learn/courses/30/lessons/12982
// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

function solution(d, budget) {
  let answer = 0;
  let count = 0;
  const get = d
    .sort((a, b) => a - b)
    .map((el) => {
      answer += el;
      count++;
      if (answer > budget) {
        count--;
        return;
      }
    });

  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));