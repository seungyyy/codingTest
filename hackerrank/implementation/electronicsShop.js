// https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

function solution(keyboards, drives, b) { 
   const answer = [];

   for (let i = 0; i < keyboards.length; i++) {
     for (let j = 0; j < drives.length; j++) {
       let spent = keyboards[i] + drives[j];
       if (b - spent > -1) {
         answer.push(spent);
       }
     }
   }

   if (answer.length === 0) return -1;
   return Math.max(...answer);

}

console.log(solution([40, 50, 60], [5, 8, 12], 60))