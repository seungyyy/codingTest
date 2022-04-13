function solution(arr1, arr2) {
  return arr1.map((row, y) => row.map((v, x) => v + arr2[y][x]));
}

console.log(solution([[1,2],[2,3]],	[[3,4],[5,6]] ))
console.log(solution([[1],[2]],	[[3],[4]] ))