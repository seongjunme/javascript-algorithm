const solution = (str) => {
  const base = str.toUpperCase();

  let i = 0,
    j = base.length - 1;

  while (i < j) {
    if (base[i] !== base[j]) return 'NO';
    i++, j--;
  }

  return 'YES';
};

console.log(solution('gooG'));
