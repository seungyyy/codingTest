// https://leetcode.com/problems/find-peak-element/

function solution(nums) { 
  let left = 0;
  let right = nums.length - 1;

  if (right <= 1) return 0;

  while (left < right) { 
    let pivot = Math.floor((left + right) / 2);
    let num = nums[pivot]
    let nextNum = nums[pivot+1]
    if (num < nextNum) { 
      left = pivot + 1;
    } else {
      right = pivot;
    }
  }

  return right;
}

console.log(solution([1, 2, 3, 1]));
console.log(solution([1, 2, 1, 3, 5, 6, 4]));