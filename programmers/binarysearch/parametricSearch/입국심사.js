// https://programmers.co.kr/learn/courses/30/lessons/43238
// n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.
// 처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.
// 모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

// 입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때, 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.
// 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
// 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
// 심사관은 1명 이상 100,000명 이하입니다.


// 로그 시간 = 이진탐색
// times -> 선형 로그 시간으로 충분히 가능!
// 우리는 특정 값을 찾는 것이 아닙니다. 최소 몇분에 모든 심사가 끝나는가
// 조건에 맞는 값을 찾아야 한다 -> 결정문제 = 이진탐색 = 파라메트릭 서치 (parametric search)
// 최소 1분에서 10억분 * n 사이
// 면접관들이 몇명을 처리하는 가?
// 처리 가능한 입국자 n보다 작다면,  분을 올려야 되고, 입국자가 n보다 크다면 분을 낮춰야 한다
// 면접관이 시간대비 몇명을 처리할 수 있는가?
// 시간 / 심사 시간 = 심사관 당 처리 가능한 입국자 수

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b) // O (n log n);
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) { 
    const mid = Math.floor((left + right) / 2)
    // sum([시간 / 심사시간])

    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    if (sum < n) {
      left = mid + 1;
    } else { 
      right = mid -1;
    }
  }

  return left;
}

let floor = (n) => Math.floor(n);

function solution(n, times) {
  let answer = 0;

  return s(n, times);
}
function s(n, times) {
  let min = 0,
    max = n * Math.max.apply(null, times);
  while (min <= max) {
    let mid = floor((min + max) / 2);
    const maxInMid = times.reduce((acc, cur) => (acc += floor(mid / cur)), 0);
    if (n <= maxInMid) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return min;
}
