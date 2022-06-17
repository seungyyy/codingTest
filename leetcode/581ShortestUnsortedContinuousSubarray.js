// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

function solution(arr) { 
  let start = 0;
  let end = arr.length - 1;
  
  while (start < arr.length - 1 && arr[start] <= arr[start + 1]) { 
    start++;
  }

  if (start === arr.length - 1) { 
    return 0;
  }

  while (end >= 0 && arr[end] >= arr[end - 1]) { 
    end--;
  }
  
  let arrMin = Infinity;
  let arrMax = -Infinity;

  for (let i = start; i <= end; i++) {
    arrMin = Math.min(arrMin, arr[i]);
    arrMax = Math.max(arrMax, arr[i]);
  }

  while (start > 0 && arr[start - 1] > arrMin) {
    start--;
  }

    
  while (end < arr.length -1 && arr[end + 1] > arrMax) {
    end++;
  }

  return end - start + 1;
}

console.log(solution([2, 6, 4, 8, 10, 9, 15]));
console.log(solution([2, 6, 7]));
console.log(solution([2, 6, 7, 3]));