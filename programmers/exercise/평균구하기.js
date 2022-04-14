// https://programmers.co.kr/learn/courses/30/lessons/12944
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
function solution(arr) {
  let answer = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    answer += arr[i];
  }
  const leg = arr.length;
  answer = answer / leg;
  return answer;
}

console.log(solution([1,2,3,4]))
console.log(solution([5,5]))