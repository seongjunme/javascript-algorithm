const solution = (arr) => {
  const nums = [...arr];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > 0 && nums[j + 1] < 0) {
        const tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }

  return nums;
};

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
