const solution = (votes) => {
  const res = new Map();
  for (const vote of votes) {
    res.set(vote, res.get(vote) ? res.get(vote) + 1 : 1);
  }
  let max = -1,
    answer = '';
  for (const [k, v] of res.entries()) {
    if (v > max) {
      max = v;
      answer = k;
    }
  }

  return answer;
};

console.log(solution('BACBACCACCBDEDE'));
