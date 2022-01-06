const solution = (...arr) => {
  const sch = [...arr].sort(([x1, y1], [x2, y2]) => (x1 === x2 ? y2 - y1 : x2 - x1));
  let start = Number.MAX_SAFE_INTEGER,
    res = 0;
  for (const [s, e] of sch) {
    if (e <= start) {
      start = s;
      res += 1;
    }
  }

  return res;
};

console.log(solution([1, 4], [2, 3], [3, 5], [4, 6], [5, 7]));
console.log(solution([3, 3], [1, 3], [2, 3]));
