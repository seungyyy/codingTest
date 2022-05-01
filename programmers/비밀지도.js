// https://programmers.co.kr/learn/courses/30/lessons/17681


// padStart 문자열 길이 도달할때까지 현재 문자열을 다른 문자열로 채운다 
function solution(n, arr1, arr2) {
    const zip = arr1.map((el,index) => 
            (el|arr2[index]).toString(2).padStart(n,0).replace(/1/g, '#').replace(/0/g, ' '))
    return zip;
}

// 다른 사람 풀이 내장함수 사용안한 풀이
// function solution(n, arr1, arr2) {
//   let num1, num2, s;
//   let answer = [];
//   //manually turning decimals to binaries cos i can!
//   for (let i = 0; i < n; i++) {
//     num1 = arr1[i];
//     num2 = arr2[i];
//     s = '';
//     for (let j = 0; j < n; j++) {
//       s = (num1 % 2) + (num2 % 2) ? '#' + s : ' ' + s;
//       num1 = Math.floor(num1 / 2);
//       num2 = Math.floor(num2 / 2);
//     }
//     answer.push(s);
//   }
//   return answer;
// }

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));