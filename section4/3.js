const solution = (table) => {
  const student = new Map();
  for (let i = 1; i <= table[0].length; i++) {
    student.set(
      i,
      Array.from({ length: table[0].length }, (v, idx) => idx + 1)
    );
  }

  for (const [num, mentee] of student.entries()) {
    table.forEach((rank) => {
      const idx = rank.indexOf(num);
      for (let i = 0; i <= idx; i++) {
        delete mentee[mentee.indexOf(rank[i])];
      }
    });
  }

  return [...student.values()].reduce((acc, el) => (acc += el.filter((e) => e).length), 0);
};

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
