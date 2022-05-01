// https://programmers.co.kr/learn/courses/30/lessons/42862
// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

function solution(n, lost, reserve) {
  let answer = 0;
  const students = Array(n + 1).fill(1);
  students[0] = 0;
  lost.forEach((no) => (students[no] -= 1));
  reserve.forEach((spare) => (students[spare] += 1));

  for (let i = 1; i < n; i++) {
    if (students[i] === 0) {
      if (students[i - 1] > 1) {
        students[i - 1] -= 1;
        students[i] += 1;
      } else if (students[i + 1] > 1) {
        students[i + 1] -= 1;
        students[i] += 1;
      }
    }
  }
  answer = students.filter((el) => el >= 1).length;

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));