// https://programmers.co.kr/learn/courses/30/lessons/12903
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  const len = s.length;
  return len % 2 === 0 ? s.slice(len / 2 - 1, len / 2 + 1) : s[Math.floor(len / 2)];
}

console.log(solution('abcde'));
console.log(solution('qwer'));