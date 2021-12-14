const solution = (a, b, c, d, e, f, g) => {
  const arr = [a, b, c, d, e, f, g];
  let min = Number.MAX_SAFE_INTEGER;

  arr.forEach((num) => {
    if (num < min) {
      min = num;
    }
  });

  return min;
};

console.log(solution(5, 3, 7, 11, 2, 15, 17));
