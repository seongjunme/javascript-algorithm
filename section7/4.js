const solution = (arr) => {
  const nums = [...arr];
  for (let i = 1; i < nums.length; i++) {
    const key = nums[i];
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > key) {
        nums[j + 1] = nums[j];
        nums[j] = key;
      } else {
        break;
      }
    }
  }
  return nums;
};

console.log(solution([11, 7, 5, 6, 10, 9]));
