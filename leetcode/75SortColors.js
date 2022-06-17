// https://leetcode.com/problems/sort-colors/
// sort o (n log n) 
// o(n)으로 풀기 in-place 
function solution(nums) { 
  let idx0 = 0;
  let i = 0;
  let idx2 = nums.length - 1;

  while (i <= idx2) { 
    if (nums[i] === 0) {
      [nums[idx0], nums[i]] = [nums[i], nums[idx0]];
      idx0++;
      i++;
    } else if (nums[i] === 2) {
      [nums[idx2], nums[i]] = [nums[i], nums[idx2]];
      idx2--;
    } else { 
      // nums[i] === 1
      i++;
    }
  }

  return nums
}

console.log(solution([2, 0, 2, 1, 1, 0]));