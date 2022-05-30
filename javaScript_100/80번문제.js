// 순열과 조합
// 한글의 자모 24자 중 자음은 총 14개입니다.
// 이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

function solution(arr, n) {
  const combi = [];
  const f = (pre, arr) => {
    for (let i = 0; i < arr.length; i++) {
      combi.push(pre + arr[i]);
      f(pre + arr[i], arr.slice(i + 1));
    }
  };

  f('', arr);
  const result = combi.filter(el => el.length === n)

  return result.length
}


console.log(solution(["ㄱ", "ㄴ", "ㄷ", "ㄹ"], 3))