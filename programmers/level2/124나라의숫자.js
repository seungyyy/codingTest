// https://programmers.co.kr/learn/courses/30/lessons/12899

// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다. 자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

function solution(n) {
  const num = [4, 1, 2];
  let answer = '';

  while (n) {
    answer = num[n % 3] + answer;
    n = n % 3 == 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return answer;
}

console.log(solution(11))
console.log(solution(6))