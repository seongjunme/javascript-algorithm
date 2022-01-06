const solution = (size, works) => {
  const memory = [];

  for (const work of works) {
    const index = memory.indexOf(work);
    if (index > -1) {
      const target = memory[index];
      for (let i = index; i > 0; i--) {
        memory[i] = memory[i - 1];
      }
      memory[0] = target;
    } else {
      for (let i = size - 1; i > 0; i--) {
        memory[i] = memory[i - 1];
      }
      memory[0] = work;
    }
  }

  return memory;
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
