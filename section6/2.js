const solution = (str) => {
  const stack = [];
  let answer = '';
  str.split('').forEach((el) => {
    console.log(stack);
    if (el === ')') {
      while (stack.length && stack.pop() !== '(') {}
    } else if (stack.length || el === '(') {
      stack.push(el);
    } else {
      answer += el;
    }
  });

  return answer;
};

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
