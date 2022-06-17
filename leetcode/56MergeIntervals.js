// https://leetcode.com/problems/merge-intervals/

function solution(arr) { 
  const sortArr = arr.sort((a, b) => a[0] - b[0])

  for (let i = 1; i < sortArr.length; i++) { 
    if (sortArr[i][0] <= sortArr[i - 1][1]) {
      sortArr[i - 1] = [sortArr[i - 1][0], sortArr[i][1]]
      sortArr.splice(i, 1)
    }
  }

  return sortArr
}

console.log(
  solution([
    [1, 3],
    [8, 10],
    [2, 6],
    [15, 18],
  ])
);

console.log(
  solution(
    [
      [1, 4],
      [4, 5],
    ],
  )
);