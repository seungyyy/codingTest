// https://programmers.co.kr/learn/courses/30/lessons/43162
// 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

// 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

function solution(n, computers) { 
  let answer = 0;

  const length = computers.length;
  const visited = Array.from({ length: n }, () => false);

  function dfs(idx) { 
    visited[idx] = true;

    for (let i = 0; i < length; i++) { 
      if (computers[idx][i] && !visited[i]) return dfs(i)
    }
  }

  for (let i = 0; i < length; i++) { 
    if (!visited[i]) { 
      dfs(i)
      answer++;
    }
  }

  return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))