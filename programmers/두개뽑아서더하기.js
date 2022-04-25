// https://programmers.co.kr/learn/courses/30/lessons/68644
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
// 예시 [2,1,3,4,1] =>result[2,3,4,5,6,7] , [5,0,2,7]	=> result[2,5,7,9,12]

function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) { 
    for (let j = i + 1; j < numbers.length; j++) { 
      temp.push(numbers[i]+ numbers[j])
    }
  }

  const answer = [...new Set(temp)].sort((a, b) => a - b)

  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));