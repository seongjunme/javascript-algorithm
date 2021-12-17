const solution = (table) => {
  let row = 0,
    col = 0,
    diagonal1 = 0,
    diagonal2 = 0,
    max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[0].length; j++) {
      row += table[i][j];
      col += table[j][i];
    }

    diagonal1 += table[i][i];
    diagonal2 += table[i][table.length - i - 1];

    max = Math.max(row, col);
    (row = 0), (col = 0);
  }

  return Math.max(max, diagonal1, diagonal2);
};

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
