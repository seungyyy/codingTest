function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

console.log(solution(2, 5))
console.log(solution(4, 3))
console.log(solution(-4, 2))