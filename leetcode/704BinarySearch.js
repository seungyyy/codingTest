// https://leetcode.com/problems/binary-search/

function solution(nums, target) { 
  let left = 0;
  let rigth = nums.length -1;

  while (left <= rigth) { 
    let pivot = Math.floor((left + rigth) / 2);

    if (nums[pivot] === target) {
      return pivot;
    } else if (nums[pivot] < target) {
      left = pivot + 1;
    } else { 
      rigth = pivot - 1;
    }
  }

  return -1;
}

console.log(solution([-1, 0, 3, 5, 9, 12], 9));
console.log(solution([-1, 0, 3, 5, 9, 12], 2));