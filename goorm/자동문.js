// https://level.goorm.io/exam/43075/1a-%EC%9E%90%EB%8F%99%EB%AC%B8/quiz/1
// https://jun01.tistory.com/7
// 등가속도 운동

const solution = (data) => {
  const test = data.map((el) => el.split(' '));
  let result = 0;
  for (let i = 0; i < test.length; i++) {
    let time = Math.sqrt((test[i][0] * 2) / test[i][1]);
    result = (time * test[i][2]).toFixed(2);
    console.log(result);
  }
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let count = 0;
  const data = [];

  for await (const line of rl) {
    if (!N) {
      N = +line;
    } else {
      data.push(line);
      count += 1;
    }
    if (N === count) {
      rl.close();
    }
  }

  solution(data);
  process.exit();
})();