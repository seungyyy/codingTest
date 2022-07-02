// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

function solution(x, y, z) { 
   if (Math.abs(x - z) < Math.abs(y - z)) return 'Cat A';
   else if (Math.abs(x - z) > Math.abs(y - z)) return 'Cat B';
   else if (Math.abs(x - z) === Math.abs(y - z)) return 'Mouse C';
}

console.log(solution(1, 2, 3))
console.log(solution(1, 3, 2))