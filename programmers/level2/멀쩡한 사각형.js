// https://programmers.co.kr/learn/courses/30/lessons/62048

// 가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.

function gcd(w, h) {
  const mod = w % h;

  if (mod === 0) return h;

  return gcd(h, mod);
}

function solution(w, h) {
  const gcdVal = gcd(w, h);

  return w * h - (w + h - gcdVal);
}

console.log(solution(8, 12))