const solution = (input) => {
  const stack = [];
  let prev = '',
    res = 0;
  for (const ch of input) {
    if (ch === ')') {
      stack.pop();
      prev === '(' ? (res += stack.length) : (res += 1);
    } else {
      stack.push(ch);
    }
    prev = ch;
  }

  return res;
};

console.log(solution('()(((()())(())()))(())')); //17
console.log(solution('(((()(()()))(())()))(()())')); //24
