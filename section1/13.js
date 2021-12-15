const solution = (str) =>
  str
    .toUpperCase()
    .split('')
    .map((ch, i) => (ch === str[i] ? ch.toLowerCase() : ch))
    .join('');

console.log(solution('StuDY'));
