// https://programmers.co.kr/learn/courses/30/lessons/12921
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
function solution(num) {
  let answer = 0;
  const primse = [false, false, ...Array(num - 1).fill(true)]
    
  for (i = 2; i * i <= num; i++) {
    if (primse[i]) {
      for (let j = i * 2; j <= num; j += i) {
        primse[j] = false
      }
    }
  }
  answer = primse.filter(Boolean).length
    
  return answer;
}

console.log(solution(10))
console.log(solution(5))