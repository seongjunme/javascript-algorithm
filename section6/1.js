const solution = (str) => {
  const stack = [];
  str.split('').forEach((el) => {
    if (el === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(el);
    }
  });

  if (stack.length) return false;
  return true;
};

console.log(solution('(()(()))(()'));
