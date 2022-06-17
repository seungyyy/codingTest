function s(A) { 
  const set = new Set(A);
  const uniqueArr = [...set].sort((a, b) => a - b)
  const sortArr = Array(uniqueArr.length).fill().map((_, i) => i + 1);

  const result = sortArr.filter((el, idx)=> el !== uniqueArr[idx])
  
  if (result[0]) {
    return result[0]
  } else { 
    return uniqueArr[uniqueArr.length - 1] + 1
  }

}

console.log(s([1, 3, 6, 4, 1, 2]));
console.log(s([1, 2]));
console.log(s([-1, -2]));