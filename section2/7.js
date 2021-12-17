const solution = (table) => {
  let cnt = 0;

  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[0].length; j++) {
      if (i > 0 && table[i][j] < table[i - 1][j]) continue;
      if (i < table.length - 1 && table[i][j] < table[i + 1][j]) continue;
      if (j > 0 && table[i][j] < table[i][j - 1]) continue;
      if (j < table[0].length && table[i][j] < table[i][j + 1]) continue;
      cnt++;
    }
  }
  return cnt;
};

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
