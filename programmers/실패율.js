// https://programmers.co.kr/learn/courses/30/lessons/42889
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
function solution(N, stages) {
  const answer = [];
  let users = stages.length;
  for (let i = 1; i <= N; i++) {
    let fail = stages.filter((el) => el === i).length;
    let ratio = fail / users;
    users -= fail;
    answer.push([i, ratio]);
  }

  answer.sort((a, b) => {
    if (a[1] === b[1]) return a[1] - b[1];
    else return b[1] - a[1];
  });

  return answer.map((el) => el[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));