// https://programmers.co.kr/learn/courses/30/lessons/12915
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

function solution(strings, n) {
  // 내부 인덱스를 가지고 비교하는데, 내부 character 가 같으면 전체 string 을 비교하고 내부 character 가 다르면 내부 character 을 비교한다
  // localeCompare 문자열과 문자열을 비교하고, 정렬순서에 따른 비교를 할 수 있다.
  return strings.sort((a, b) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])));
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));