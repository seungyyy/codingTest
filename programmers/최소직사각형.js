// https://programmers.co.kr/learn/courses/30/lessons/86491
// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

function solution(sizes) { 
  for (const square of sizes) { 
    if(square[0] < square[1]) [square[0], square[1]] = [square[1], square[0]]
  }

  const maxHeight = Math.max(...sizes.map(el => el[0]))
  const maxWidth = Math.max(...sizes.map(el => el[1]))

  return maxHeight * maxWidth;

  // 다른 사람 풀이
  //const [height, width] = sizes.reduce(([h, w], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(w, Math.min(a, b))], [0, 0])
  //return height * width;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	))