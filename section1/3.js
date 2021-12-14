const solution = (n) => parseInt(n / 12) + (n % 12 ? 1 : 0);

console.log(solution(25));
console.log(solution(178));
