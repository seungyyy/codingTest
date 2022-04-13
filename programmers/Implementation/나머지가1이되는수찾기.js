function solution(n) {
  const answer = [];

  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      answer.push(i);
    }
  }
  const result = Math.min(...answer);

  return result;

}
// function solution(n, x = 1) {    
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }    
// }

console.log(solution(10))
console.log(solution(12))

