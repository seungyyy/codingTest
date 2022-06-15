// https://programmers.co.kr/learn/courses/30/lessons/60058

// "균형잡힌 괄호 문자열" p가 매개변수로 주어질 때, 주어진 알고리즘을 수행해 "올바른 괄호 문자열"로 변환한 결과를 return 하도록 solution 함수를 완성해 주세요.

function solution(p) {
  if (p === '') return '';

  let count = 0;
  let check = false;
  let answer = '';

  for (let i = 0; i < p.length; i++) {
    p[i] === '(' ? count++ : count--;

    if (count < 0) check = true;

    if (count === 0) {
      let u = p.slice(0, i + 1);
      let v = p.slice(i + 1);

      if (check) {
        answer += '(';
        answer += solution(v);
        answer += ')';

        for (let j = 1; j < i; j++) {
          if (p[j] == ')') answer += '(';
          if (p[j] == '(') answer += ')';
        }
        return answer;
      } else {
        answer += u;
        answer += solution(v);
        return answer;
      }
    }
  }
}

console.log(solution('()))((()'));