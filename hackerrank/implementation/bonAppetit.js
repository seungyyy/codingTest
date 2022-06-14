// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

function bonAppetit(bill, k, b) {
  let pay = 0;
  let answer;

  const result = bill.map((_, idx) => {
    if (idx !== k) {
      pay += bill[idx];
    }
  });

  pay /= 2;

  if (pay !== b) {
    answer = b - pay;
  } else if (pay === b) {
    answer = 'Bon Appetit';
  }

  console.log(answer);
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12))
console.log(bonAppetit([3, 10, 2, 9], 1, 7))