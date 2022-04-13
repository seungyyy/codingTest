function solution(phone_number) {
  const phone = phone_number.slice(0, -4).replace(/[0-9]/g, '*');
  const number = phone_number.slice(-4);

  const answer = phone + number;
  return answer;
}

console.log(solution('01033334444'));
console.log(solution('027778888'));
