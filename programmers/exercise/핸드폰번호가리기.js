// https://programmers.co.kr/learn/courses/30/lessons/12948
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
function solution(phone_number) {
  const phone = phone_number.slice(0, -4).replace(/[0-9]/g, '*');
  const number = phone_number.slice(-4);

  const answer = phone + number;
  return answer;
}

console.log(solution('01033334444'));
console.log(solution('027778888'));
