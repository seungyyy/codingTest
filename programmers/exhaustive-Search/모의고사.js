// https://programmers.co.kr/learn/courses/30/lessons/42840
// 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다 .가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

function solution(answers) {
  const answer = [];
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (students[0][i % students[0].length] === answers[i]) count[0]++;
    if (students[1][i % students[1].length] === answers[i]) count[1]++;
    if (students[2][i % students[2].length] === answers[i]) count[2]++;
  }

  const rank = Math.max(...count);

  for (let i = 0; i < count.length; i++) {
    if (count[i] === rank) answer.push(i + 1);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));