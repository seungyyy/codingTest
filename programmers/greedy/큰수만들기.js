// https://programmers.co.kr/learn/courses/30/lessons/42883
// 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.
// 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

// 큰 값이 나오면 이전 값 중 더 작은 값은 전부 삭제
// 스택의 바닥에서부터 탑은 큰 수부터 작은 수로 나열 되어야 한다
function solution(number, k) { 
  const stack = [];
  let answer = '';
  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    while (k > 0 && stack[stack.length - 1] < el) { 
      stack.pop();
      k--;
    }
    stack.push(el);
  }

  stack.splice(stack.length - k, k);
  answer = stack.join('');
  return answer;
}

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));

function solution(number, k) {
  const stack = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    const item = number[i];
    // stack이 초기에 비어있으면 push 한다.
    if (stack.length === 0) {
      stack.push(item);
      continue;
    }
    // stack에 쌓인 최근 값이 들어와야할 값보다 크거나 같을때까지 꺼낸다.
    while (stack[stack.length - 1] < item) {
      stack.pop();
      count++;
      // 만약 숫자를 빼야할만큼 뺐다면 완성된 값을 반환한다.
      if (count === k) return stack.join('') + number.slice(i, number.length);
      // 스택이 비어있으면 루프를 멈추고 스택에 아이템을 추가한다.
      if (stack.length === 0) break;
    }
    stack.push(item);
  }
  // 만약
  return stack.join('').slice(0, number.length - k + count);
}