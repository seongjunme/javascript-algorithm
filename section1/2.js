const solution = (a, b, c) => {
  const sum = a + b + c;
  let max = a;
  if (max < b) max = b;
  if (max < c) max = c;

  if (sum - max >= max) return 'YES';
  else return 'NO';
};

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
