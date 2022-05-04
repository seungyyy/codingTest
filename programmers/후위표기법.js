function reversePolish(newExpr) {
  let expr = newExpr.split(' ');
  let stack = [];
  let answer = '';
  if (expr === '') {
    return 0;
  }

  for (let i = 0; i < expr.length; i++) {
    if (!isNaN(expr[i]) && isFinite(expr[i])) {
      stack.push(expr[i]);
    } else {
      let b = stack.pop();
      let a = stack.pop();
      if (expr[i] === '+') {
        stack.push(parseInt(a) + parseInt(b));
      } else if (expr[i] === '-') {
        stack.push(parseInt(a) - parseInt(b));
      } else if (expr[i] === '*') {
        stack.push(parseInt(a) * parseInt(b));
      } else if (expr[i] === '/') {
        stack.push(parseInt(a) / parseInt(b));
      } 
    }
  }
  answer = stack[0]
  return answer;
}

console.log(reversePolish('1 3 5 * -'));