const solution = (arr) => {
  const nums = [...arr];
  for (let i = 0; i < nums.length - 1; i++) {
    let min = nums[i],
      tmp = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (min > nums[j]) {
        min = nums[j];
        tmp = j;
      }
    }
    nums[tmp] = nums[i];
    nums[i] = min;
  }

  return nums;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
