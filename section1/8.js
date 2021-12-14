const getComb = (arr, r) => {
  const results = [];

  if (r === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const comb = getComb(rest, r - 1);
    const attached = comb.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const solution = (arr) => {
  const combs = getComb(arr, 7);
  return combs.find((comb) => comb.reduce((acc, n) => acc + n, 0) === 100);
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
