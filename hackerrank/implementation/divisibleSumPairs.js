// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function divisibleSumPairs(n, k, ar) {
  // 쌍의 합이 k 이거나 k의 배수 찾기
  let result = 0;
  for (let i = 0; i < n; i++) { 
    for (let j = i + 1; j < n; j++) {
      let num = ar[i] + ar[j]
      if (num % k === 0) { 
        result++
      }
    }
  }

  return result;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]))
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
