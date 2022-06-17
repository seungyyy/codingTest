// https://leetcode.com/problems/move-zeroes/

function solution(arr) { 
  let idx = 0;
  
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] !== 0) { 
      arr[idx] = arr[i]
      idx++;
    }
  }

  for (; idx < arr.length; idx++) { 
    arr[idx] = 0;
  }
  
  return arr
}

function solution2(arr) {
  const answer = Array(arr.length).fill(0)

  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      answer[idx] = arr[i];
      idx++;
    }
  }


  console.log(answer);
}


//console.log(solution([0, 1, 0, 3, 12]));
console.log(solution2([0, 1, 0, 3, 12]));