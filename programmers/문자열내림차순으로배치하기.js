// https://programmers.co.kr/learn/courses/30/lessons/12917
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  const str = s
    .split('')
    .map((el) => el.charCodeAt())
    .sort((a, b) => b - a)
    .map((el) => String.fromCharCode(el));

  return str.join('');

  // 다른사람풀이
  //  const str = s.split('').sort().reverse().join('')
}

console.log(solution('Zbcdefg'));