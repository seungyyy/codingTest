// https://level.goorm.io/exam/43056/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/quiz/1

// Run by Node.js
const solution = (data) => {
	const gameAnswer = data.split(' ')
	let winner = 0;
	const hash = {
		1: 0,
		2: 0,
		3: 0
	}
	gameAnswer.forEach((it) => {
		if (hash.hasOwnProperty(it) === true) {
			hash[it] += 1
		}
	})
	
	let count = 0;
	let num = 0;
	for (const value in hash) {
		if (hash[value] === 0) { 
			count++
			if(count === 2) {
				console.log(0)
				break
			} else if (value === '1' && hash[2] !== 0 && hash[3] !== 0) {
				winner = hash[3]
				console.log(winner)
				return
			}	else if (value === '2' && hash[1] !== 0 && hash[3] !== 0) {
				winner = hash[1]
				console.log(winner)
				return
			} else if (value === '3') {
				winner = hash[2]
				console.log(winner)
				return
			}
		} else if (hash[value] !== 0) {
			num++
			if (num === 3) {
				console.log(0)
				break
			} 
		} 

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
	solution(data)
	process.exit();
});