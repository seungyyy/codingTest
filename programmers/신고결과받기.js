// https://programmers.co.kr/learn/courses/30/lessons/92334
// 이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(id_list, report, k) {
  report = [...new Set(report)];
  const reported = report.map((el) => el.split(' ')[1]);
  const reported_final = [];
  const count = new Array(id_list.length).fill(0);
  reported.forEach((el) => {
    count[id_list.indexOf(el)]++;
  });
  count.forEach((el, i) => {
    if (el >= k) {
      reported_final.push(id_list[i]);
    }
  });
  count.fill(0);
  report.forEach((el) => {
    el = el.split(' ');
    if (reported_final.includes(el[1])) {
      count[id_list.indexOf(el[0])]++;
    }
  });

  return count;
}

console.log(solution(['muzi', 'frodo', 'apeach', 'neo'],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2 ));
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));