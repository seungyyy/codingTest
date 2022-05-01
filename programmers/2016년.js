// https://programmers.co.kr/learn/courses/30/lessons/12901
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.

function solution(a, b) { 
  let count = 0;
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  for (let i = 1; i < a; i++) { 
    count += months[i];
  }
  count += b;

  return days[(count + 4) % 7]
  

  // Date 객체 풀이
      // const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      // const date = new Date(`2016-${a}-${b}`);
      // const day = date.getDay();
      // return days[day];
}

console.log(solution(5, 24))