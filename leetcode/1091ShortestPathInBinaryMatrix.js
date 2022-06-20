// https://leetcode.com/problems/shortest-path-in-binary-matrix/

function solution(grid) { 
  if (grid[0][0] == 1) return -1;

  const dirs = [[1, 1], [1, 0], [1, -1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [0, 1]]
  const N = grid.length;
  const isValid = (x, y) => x >= 0 && x < N && y >= 0 && y < N;

  grid[0][0] = 1;

  const queue = [[0, 0, 1]] // [[x, y, steps]]
  while (queue.length) { 
    const [x, y, dist] = queue.shift();

    if (x == N - 1 && y == N - 1) return dist;

    for (const [dx, dy] of dirs) { 
      const nx = x + dx, ny = y + dy;
      if (isValid(nx, ny) && grid[nx][ny] == 0) { 
        queue.push([nx, ny, dist + 1]);
        grid[nx][ny] = 1
      }
    }
  }
  return -1
}

console.log(solution([[0,1],[1,0]]))
console.log(
  solution([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
console.log(
  solution([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);