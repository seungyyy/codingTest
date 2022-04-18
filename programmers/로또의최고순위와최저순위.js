// https://programmers.co.kr/learn/courses/30/lessons/77484
// 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

function solution(lottos, win_nums) {
  const answer = [];

  const correct = lottos.filter((el) => win_nums.includes(el)).length;
  const zero = lottos.filter((el) => el === 0).length;

  let min = 6 - correct === 6 ? 6 : 7 - correct;
  let max = min - zero < 1 ? 1 : min - zero;

  answer.push(max, min);
  return answer;

  // const rank = [6, 6, 5, 4, 3, 2, 1];

  // let minCount = lottos.filter(v => win_nums.includes(v)).length;
  // let zeroCount = lottos.filter(v => !v).length;

  // const maxCount = minCount + zeroCount;

  // return [rank[maxCount], rank[minCount]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([20, 9, 3, 45, 4, 35], [20, 9, 3, 45, 4, 35]));