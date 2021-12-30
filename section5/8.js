const isAnagram = (a, b) => {
  const count = new Map();
  for (const ch of a) {
    count.set(ch, count.get(ch) !== undefined ? count.get(ch) + 1 : 1);
  }
  for (const ch of b) {
    count.set(ch, count.get(ch) !== undefined ? count.get(ch) - 1 : 1);
  }

  for (const cnt of count.values()) {
    if (cnt !== 0) return false;
  }

  return true;
};

const solution = (str, target) => {
  const arr = str.split('');
  let answer = 0;
  for (let i = 0; i < str.length - 2; i++) {
    const part = arr.slice(i, i + 3).join('');

    if (isAnagram(part, target)) {
      answer++;
    }
  }
  return answer;
};

console.log(solution('bacaAacba', 'abc'));
