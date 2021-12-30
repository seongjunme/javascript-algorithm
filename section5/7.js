const solution = (a, b) => {
  const count = new Map();
  for (const ch of a) {
    count.set(ch, count.get(ch) !== undefined ? count.get(ch) + 1 : 1);
  }
  for (const ch of b) {
    count.set(ch, count.get(ch) !== undefined ? count.get(ch) - 1 : 1);
  }

  for (const cnt of count.values()) {
    if (cnt !== 0) return 'NO';
  }

  return 'YES';
};

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
