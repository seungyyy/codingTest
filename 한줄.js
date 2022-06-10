const solution = (data) => { 
  const test = [...data]
  const minResult = [test[1]];
  const maxResult = [test[1]];
  let min = 0;
  let max = 0;

  let minCount = 0;
  while (minCount < 1) {
    if (minResult[0] === test[0] + 1) {
      minResult.unshift(test[0]);
    } else {
      minResult.push(minResult[0] + 1);
      min++;
    }

    if (minResult[1] + 1 === test[2]) {
      minResult.push(test[2]);
      minCount++;
    } else {
      minResult.push(minResult[1] + 1);
      min++;
      minCount++;
    }
  }  

  let maxCount = 0;
  while (maxCount < 1) {
    if (maxResult.length === 1) {
      if (maxResult[0] === test[2] - 1) {
        maxResult.push(test[2]);
      } else {
        maxResult.unshift(test[0]);
        maxResult.push(test[2] + 1);
        max++;
      }
    } 
    if (maxResult[0] === test[0] + 1) { 
      maxResult.unshift(test[0])
      maxCount++;
    }
    if (!maxResult[2] && maxResult[1] + 1 === test[2]) {
        maxResult.push(test[2]);
        maxCount++;
      } else if (maxResult[2] && maxResult[1] + 1 === maxResult[2] && maxResult[0] + 1 === maxResult[1]) {
        maxCount++;
      } else if (maxResult[2] && maxResult[1] + 1 !== maxResult[2]) {
        maxResult[0] = maxResult[1];
        maxResult[1] = maxResult[2];
        maxResult[2] = maxResult[2] + 1;
        max++;
    }
    if (maxResult[2] && maxResult[0] + 1 !== maxResult[1]) { 
        maxResult[0] = maxResult[1];
        maxResult[1] = maxResult[2];
        maxResult[2] = maxResult[2] + 1;
        max++;
      }
    
  
  }  
  
  console.log(min, 'min')
  console.log(max, 'max')

}

console.log(solution([5, 6, 10]))
console.log(solution([1, 2, 3]))
console.log(solution([4, 7, 9]))