// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function sockMerchant(n, ar) {
  let count = 0;
  const dummy = [];

  for (let i = 0; i < n; i++) {
    if (!dummy.includes(ar[i])) {
      dummy.push(ar[i]);
    } else {
      dummy.splice(dummy.indexOf(ar[i]), 1);
      count++;
    }
  }
  return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));