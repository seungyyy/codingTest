// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

function birthday(s, d, m) {
  let result = 0;
  
  for (let i = 0; i < s.length; i++) { 
    let num = s.slice(i, m+i)
    let sum = num.reduce((prev, curr) => prev + curr, 0)
    if (sum === d) result++
  }

  return result;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))
console.log(birthday([1, 2, 1, 3, 2], 3, 2))
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2))
console.log(birthday([4, 1], 4, 1))