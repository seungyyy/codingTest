// https://www.acmicpc.net/problem/10819
// 제출 코드
// let input = require('fs').readFileSync('../ex.txt').toString().trim().split('\n');
// let n = +input.shift();
// let arr = input
//   .shift()
//   .split(' ')
//   .map((e) => +e);


// function solution(a, b) {
//   const answer = new Set();
//   const visited = new Array(n + 1).fill(0);
//   const tmp = [];

//   const dfs = (cnt) => {
//     if (cnt === n) {
//       let sum = 0;
//       for (let i = 0; i < tmp.length - 1; i++) {
//         sum += Math.abs(tmp[i] - tmp[i + 1]);
//       }
//       answer.add(sum);
//     } else {
//       for (let i = 0; i < n; i++) {
//         if (!visited[i]) {
//           visited[i] = 1;
//           tmp.push(arr[i]);
//           dfs(cnt + 1)
//           tmp.pop();
//           visited[i] = 0;
//         }
//       }
//     }
//   };

//   dfs(0);
//   console.log(Math.max(...[...answer]))
// }



// console.log(solution(n, arr))

function solution(a, b) {
  const answer = new Set();
  const visited = new Array(a + 1).fill(false);
  const tmp = [];

  const dfs = (cnt) => {
    if (cnt === a) {
      let sum = 0;
      console.log(tmp);
      for (let i = 0; i < tmp.length - 1; i++) {
        sum += Math.abs(tmp[i] - tmp[i + 1]);
      }
      answer.add(sum);
    } else {
      for (let i = 0; i < a; i++) {
        if (!visited[i]) {
          visited[i] = true;
          tmp.push(b[i]);
          dfs(cnt + 1);
          tmp.pop();
          visited[i] = false;
        }
      }
    }
  };

  dfs(0);
  console.log(Math.max(...[...answer]));
}

console.log(solution(3, [20, 1, 15]));