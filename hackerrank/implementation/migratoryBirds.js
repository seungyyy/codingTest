// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function migratoryBirds(arr) {
  const dic = arr.reduce((obj, num) => ((obj[num] = obj[num] ? obj[num] + 1 : 1), obj), {});
  const max = Math.max(...Object.values(dic));
  const num = Object.keys(dic).find((key) => dic[key] === max);

  return num.length > 1 ? num.sort().slice(0, 1) : num;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
console.log(migratoryBirds([1, 1, 2, 2, 3]))
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))