const solution = (arr) => {
  return arr
    .join('')
    .split(0)
    .map((el) => el.split(''))
    .map((el) => el.map((e) => parseInt(e)))
    .reduce((res, el) => (res += el.reduce((sum, e, idx) => (sum = sum + idx + 1), 0)), 0);
};

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
