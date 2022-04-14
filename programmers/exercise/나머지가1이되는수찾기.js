// https://programmers.co.kr/learn/courses/30/lessons/87389
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
function solution(n) {
    const answer = [];
    
    for (let i = 1; i < n; i++) {
        if (n % i === 1) answer.push(i)
    }
    const result = Math.min(...answer)
  
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