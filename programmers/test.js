function movie(arr) { 
  const answer = [];
  const tmp = arr.sort().reduce((obj, key) => ((obj[key] = obj[key] ? obj[key] + 1 : 1), obj), {})
  const sort = Object.values(tmp).sort((a, b) => b - a)

  sort.forEach(el => { 
    for (const [key, value] of Object.entries(tmp)) { 
      if (el === value && !answer.includes(key)) { 
        answer.push(key)
        break;
      }
    }
  })

  return answer;

}

console.log(movie(['spy', 'spy', 'ray', 'once', 'spy', 'once', 'room', 'ray']));


function arrayRotate(arr1, arr2) { 
  let answer = false;
  
  for (let i = 0; i < arr1.length; i++) { 
    let first = arr1[0]
    for (let j = 0; j < arr1.length-1; j++) { 
      arr1[j] = arr1[j+1]
    }
    arr1[arr1.length - 1] = first;
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) { 
      return true;
    }
  }
  
  return answer;
}

console.log(arrayRotate([4, 3, 2, 5], [2, 5, 4, 3]))
console.log(arrayRotate([4, 3, 2, 5], [4, 5, 2, 3]))