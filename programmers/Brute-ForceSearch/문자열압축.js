// https://programmers.co.kr/learn/courses/30/lessons/60057
// 예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.
// 압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
	//문자열 길이 1인 경우
    if (s.length === 1) return 1;
    let strings = [];
    let answer = 0;
    //첫번째 반복문은 압축할 문자열 길이 1부터 시작 ~ 문자열 길이 / 2
    for(let i = 1; i <= parseInt(s.length / 2); i++) {
        let cnt = 1;
        let string = '';
        for(let j = 0; j < s.length; j += i) {
            const current = s.substr(j, i);
            const next = s.substr(j+i, i);
            if(current === next) {
                cnt++;
            } else {
                string = cnt > 1? string + cnt + current : string + current;
                cnt = 1;
            }
        }
        strings.push(string.length);
    }
    return Math.min(...strings);
}

console.log(solution('aabbaccc'));
console.log(solution('ababcdcdababcdcd'));
console.log(solution('abcabcdede'));
console.log(solution('abcabcabcabcdededededede'));
console.log(solution('xababcdcdababcdcd'));