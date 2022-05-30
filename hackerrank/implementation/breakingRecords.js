// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function breakingRecords(scores) {
  // 최고의 기록 횟수와 최악의 기록 횟수 
  const result = [];

  let bestScore = scores[0]
  let worstScore = scores[0]
  let bestCount = 0;
  let worstCount = 0;

  for (let i = 1; i < scores.length; i++) { 
    if (bestScore < scores[i]) { 
      bestScore = scores[i];
      bestCount++;
    } 
    if (worstScore > scores[i]) { 
      worstScore = scores[i]
      worstCount++;
    }
  }
  result.push(bestCount, worstCount);

  return result
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));