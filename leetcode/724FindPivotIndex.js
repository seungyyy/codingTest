// https://leetcode.com/problems/find-pivot-index/

function solution(arr) { 
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  
  let left = 0;
  let right = sum;

  let pastPivot = 0;
  for (let i = 0; i < arr.length; i++) { 
    let num = arr[i];

    right = right - num;
    left = left + pastPivot;

    if (left === right) { 
      return i
    }
    pastPivot = num;
  }
  return -1;
}

console.log(solution([2, 1, -1]));
console.log(solution([1, 2, 3]));
console.log(solution([1, 7, 3, 6, 5, 6]));