// https://leetcode.com/problems/find-the-duplicate-number/

// o(n), 0(1);
function solution(arr) { 
  for (let i = 0; i < arr.length; i++) { 
    let idx = Math.abs(arr[i]) - 1
    arr[idx] *= -1;
    if (arr[idx] > 0) {
      return Math.abs(arr[i])
    }
  }
}

// function solution(arr) {  o(n), 0 (n)
//   const sortArr = Array(arr.length).fill(false)

//   for (let i = 0; i < arr.length; i++) { 
//     if (sortArr[arr[i]] === false) {
//       sortArr[arr[i]] = true;
//     } else { 
//       return arr[i]
//     }
//   }
// }

console.log(solution([1, 3, 4, 2, 2]));
console.log(solution([3, 1, 3, 4, 2]));