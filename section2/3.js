const GAME = Object.freeze({
  1: 'SCISSORS',
  2: 'ROCK',
  3: 'PAPER',
});

const solution = (A, B) => {
  const answer = [];

  for (let i = 0; i < A.length; i++) {
    if (GAME[A[i]] === 'SCISSORS') {
      if (GAME[B[i]] === 'PAPER') {
        answer.push('A');
      } else if (GAME[B[i]] === 'ROCK') {
        answer.push('B');
      } else if (GAME[B[i]] === 'SCISSORS') {
        answer.push('D');
      } else {
        return;
      }
    } else if (GAME[A[i]] === 'ROCK') {
      if (GAME[B[i]] === 'PAPER') {
        answer.push('B');
      } else if (GAME[B[i]] === 'ROCK') {
        answer.push('D');
      } else if (GAME[B[i]] === 'SCISSORS') {
        answer.push('A');
      } else {
        return;
      }
    } else if (GAME[A[i]] === 'PAPER') {
      if (GAME[B[i]] === 'PAPER') {
        answer.push('D');
      } else if (GAME[B[i]] === 'ROCK') {
        answer.push('A');
      } else if (GAME[B[i]] === 'SCISSORS') {
        answer.push('B');
      } else {
        return;
      }
    } else {
      return;
    }
  }
  return answer;
};

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
