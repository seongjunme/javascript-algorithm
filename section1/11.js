const solution = (str) => {
  let cnt = 0;

  for (const ch of str) {
    if (ch === ch.toUpperCase()) {
      cnt += 1;
    }
  }

  return cnt;
};

console.log(solution('KoreaTimeGood'));
