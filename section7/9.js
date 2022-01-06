const solution = (...arr) => {
  const sch = [...arr].sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let ing = [];
  let idx = 0;
  let res = 0;

  for (let i = 0; i <= 72; i++) {
    if (idx >= sch.length) break;
    if (sch[idx][0] === i) {
      ing.push(sch[idx]);
      idx++;
    }

    ing = ing.filter(([s, e]) => e !== i);
    res = res > ing.length ? res : ing.length;
  }

  return res;
};

const solution2 = (...arr) => {
  let res = 0;
  arr
    .reduce((acc, [s, e]) => [...acc, [s, 's'], [e, 'e']], [])
    .sort((a, b) => (a[0] === b[0] ? a[1].charCodeAt() - b[1].charCodeAt() : a[0] - b[0]))
    .reduce((cnt, [time, flag]) => {
      flag === 's' ? cnt++ : cnt--;
      res = Math.max(res, cnt);
      return cnt;
    }, 0);
  return res;
};

console.log(solution2([14, 18], [12, 15], [15, 20], [20, 30], [5, 14]));
console.log(solution2([1, 3], [4, 8], [5, 9], [6, 10]));
console.log(solution2([17, 28], [6, 30], [1, 27], [19, 38], [4, 46], [23, 30], [35, 43], [26, 45], [21, 31], [11, 44]));
console.log(solution([14, 18], [12, 15], [15, 20], [20, 30], [5, 14]));
console.log(solution([1, 3], [4, 8], [5, 9], [6, 10]));
console.log(solution([17, 28], [6, 30], [1, 27], [19, 38], [4, 46], [23, 30], [35, 43], [26, 45], [21, 31], [11, 44]));
