const sum = (num) => {
  let tmp = num,
    res = 0;

  do {
    res += tmp % 10;
    tmp = parseInt(tmp / 10);
  } while (tmp >= 10);

  return res;
};

const solution = (arr) => {
  let max = 0,
    answer = 0;
  for (const a of arr) {
    const s = sum(a);
    if (s === max) {
      answer = answer > a ? answer : a;
    } else if (s > max) {
      max = s;
      answer = a;
    }
  }

  return answer;
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
