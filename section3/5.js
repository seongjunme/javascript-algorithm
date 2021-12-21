const solution = (str) => {
  let res = '',
    prev = '',
    cnt = 1;
  for (const ch of str) {
    if (ch === prev) {
      cnt++;
    } else {
      cnt > 1 && (res += cnt);
      res += ch;
      prev = ch;
      cnt = 1;
    }
  }

  return res;
};

console.log(solution('KKHSSSSSSSE'));
//K2HS6E
