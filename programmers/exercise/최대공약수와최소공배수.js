// https://programmers.co.kr/learn/courses/30/lessons/12940
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다
function solution(n, m) {
  const gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));
  
  return [gcd(n, m), (n * m) / gcd(n, m)];
  // var r;
  // for(var ab= a*b;r = a % b;a = b, b = r){}
  // return [b, ab/b];
}

console.log(solution(3, 12))
console.log(solution(2, 5))