const solution = (str) => {
  let answer = '';

  for (const ch of str) {
    if (answer.indexOf(ch) === -1) {
      answer += ch;
    }
  }

  return answer;
};

console.log(solution('ksekkset'));
