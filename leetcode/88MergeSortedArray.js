// https://leetcode.com/problems/merge-sorted-array/

function solution(nums1, nums2, m, n) { 
  let idx1 = m-1;
  let idx2 = n - 1;
  let wIdx = nums1.length - 1;

  if (n < 1) return nums1;

  while (idx1 >= 0 && idx2 >= 0) { 
    if (nums1[idx1] >= nums2[idx2]) {
      nums1[wIdx] = nums1[idx1]
      idx1--
      wIdx--
    } else { 
      nums1[wIdx] = nums2[idx2]
      idx2--
      wIdx--
    }
  }

  while (0 <= idx2) { 
    nums1[wIdx] = nums2[idx2]
    wIdx--;
    idx2--;
  }

  return nums1
}

console.log(solution([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3));
console.log(solution([1], [], 1, 0));
console.log(solution([0], [1], 0, 1));