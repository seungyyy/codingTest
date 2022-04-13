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

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'], 2
  )
);

console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));