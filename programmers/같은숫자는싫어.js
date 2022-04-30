// https://programmers.co.kr/learn/courses/30/lessons/12906
//  배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }

  return answer;
  // 다른 사람 풀이 return arr.filter((val, index) => val !== arr[index+1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));