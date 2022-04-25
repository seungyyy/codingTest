// https://programmers.co.kr/learn/courses/30/lessons/67256
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.
// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
//  맨하튼 거리
function solution(numbers, hand) { 
  let answer = '';
  const keypad = {
    1: [1, 1], 2: [1,2], 3: [1,3],
    4: [2, 1], 5: [2,2], 6: [2,3],
    7: [3, 1], 8: [3,2], 9: [3,3],
    '*': [4, 1], 0: [1,2], '#': [1,3],
  }

  let currentL = [4, 1];
  let currentR = [4, 3];

  numbers.forEach(num => { 
    let numLocation = keypad[num];

    if (numLocation[1] === 1) { // 왼손
      currentL = numLocation;
      answer += 'L'
    } else if (numLocation[1] === 3) {// 오른손
      currentR = numLocation;
      answer += 'R'
    } else {
      // 각 손가락의 위치 확인 가장 가까운 손가락 이동 둘 다 같은 거리라면 hand에 따라 결정
      let distanceL = getDistance(currentL, numLocation);
      let distanceR = getDistance(currentR, numLocation);
      
      if (distanceL === distanceR) {
        if (hand === 'left') {
          currentL = numLocation;
          answer += 'L'
        } else {
          currentR = numLocation;
          answer += 'R'
        }
      } else if (distanceR < distanceL) {
        currentR = numLocation;
        answer += 'R'
      } else { 
        currentL = numLocation;
        answer += 'L'
      }
    }
  })

  return answer;
}

function getDistance(arr1, arr2) { 
  let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);

  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));