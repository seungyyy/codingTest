// https://leetcode.com/problems/minimum-size-subarray-sum/

function solution(nums, target) { 
  let result = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) { 
    sum += nums[i]

    while (sum >= target) { 
      result = Math.min(result, i - left + 1)
      sum -= nums[left++]
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}

console.log(solution([1, 1, 1, 1, 2, 2], 4));
//console.log(solution([2, 3, 1, 2, 4, 3], 7));