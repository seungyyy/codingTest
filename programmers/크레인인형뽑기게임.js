// https://programmers.co.kr/learn/courses/30/lessons/64061

// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(board, moves) {
  let answer = 0;
  const length = board.length;
  let getItem = [];

  moves.forEach((move) => {
    for (let i = 0; i < length; i++) {
      const item = board[i][move - 1];
      if (item !== 0) {
        if (getItem[getItem.length - 1] !== item) {
          getItem.push(item);
        } else {
          getItem.pop();
          answer += 2;
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);