const solution = (arr, budget) => {
  let result = 0;
  const prices = [...arr].sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < prices.length; i++) {
    let sum = parseInt(prices[i][0] / 2) + prices[i][1],
      max = 1;

    for (let j = 0; j < prices.length; j++) {
      if (i === j) continue;
      if (sum + prices[j][0] + prices[j][1] > budget) continue;

      sum += prices[j][0] + prices[j][1];
      max += 1;
    }

    result = result > max ? result : max;
  }

  return result;
};

console.log(
  solution(
    [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ],
    28
  )
);
