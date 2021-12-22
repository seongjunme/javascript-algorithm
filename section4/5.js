const getComb = (arr, n) => {
  const result = [];

  if (n === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const comb = getComb(rest, n - 1);
    const attached = comb.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
};

const solution = (cards, target) => {
  return getComb(cards, 3)
    .map(([a, b, c]) => a + b + c)
    .sort((a, b) => b - a)[target - 1];
};

console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
