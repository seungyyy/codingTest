// https://programmers.co.kr/learn/courses/30/lessons/42748
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

function solution(array, commands) { 
  const answer = [];

  for (let i = 0; i < commands.length; i++) { 
    let arr = array.slice(commands[i][0]-1, commands[i][1])
    arr.sort((a, b) => a - b)
    answer.push(arr[commands[i][2]-1])
  }
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));