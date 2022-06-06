// https://level.goorm.io/exam/47882/%ED%97%B7%EA%B0%88%EB%A6%AC%EB%8A%94-%EC%9E%91%EB%8C%80%EA%B8%B0/quiz/1


// Run by Node.js
const solution = (data) => {
	const str = {
		'1': 0,
		'I': 0,
		'l': 0,
		'|': 0,
							}
	const words = data.split('').forEach(it => 
	{	
			if (it === '1') {
			return str[1] += 1
		} else if (it === 'I') {
			return str['I'] += 1
		} else if (it === 'l') {
			return str['l'] += 1
		} else if (it === '|') {
			return str['|'] += 1
		}
	})
	
	const result = Object.values(str)
	for (let i = 0; i < result.length; i++) {
		console.log(result[i])
	}
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let data = '';
rl.on("line", function(line) {
	data = line;
	rl.close();
}).on("close", function() {
	solution(data);
	process.exit();
});