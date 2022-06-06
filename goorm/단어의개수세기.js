//https://level.goorm.io/exam/47883/%EB%8B%A8%EC%96%B4%EC%9D%98-%EA%B0%9C%EC%88%98-%EC%84%B8%EA%B8%B0/quiz/1

const solution = (data) => {
  const words = data.split(' ').filter((el) => el !== '');

  console.log(words.length);
};
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = '';
rl.on('line', function (line) {
  data = line;
  rl.close();
}).on('close', function () {
  solution(data);
  process.exit();
});