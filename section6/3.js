const solution = (board, moves) => {
  let answer = 0;
  const bucket = [];
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const target = board[i][move - 1];
      if (!target) continue;
      if (target === bucket[bucket.length - 1]) {
        bucket.pop();
        answer += 2;
      } else {
        bucket.push(target);
      }
      board[i][move - 1] = 0;
      break;
    }
  });

  return answer;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
