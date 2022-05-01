// https://programmers.co.kr/learn/courses/30/lessons/82612
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.

function solution(price, money, count) {
  let temp = 0;
  for (let i = 0; i <= count; i++) {
    temp += price * i;
  }

  return money >= temp ? 0 : temp - money;
  // 다른 사람 풀이 - 가우스의 공식 활용
  // const tmp = price * count * (count + 1) /2 -money
  // return tmp > 0 ? tmp : 0;
}

console.log(solution(3, 20, 4))