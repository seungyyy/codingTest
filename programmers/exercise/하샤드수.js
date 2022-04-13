function solution(x) {
  let answer = false;

  const insert = x.toString().split('');

  let cnt = 0;
  for (let i = 0; i <= insert.length - 1; i++) {
    cnt += parseInt(insert[i]);
  }
  answer = x % cnt === 0 ? true : false;

  return answer;
}

console.log(solution(10))
console.log(solution(12))
console.log(solution(11))
console.log(solution(13))