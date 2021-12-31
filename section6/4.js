function solution(board, moves) {
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
}
