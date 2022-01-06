const solution = (arr, target) => {
  const nums = [...arr].sort((a, b) => a - b);
  let i = parseInt(nums.length / 2);
  while (i >= 0 && i < nums.length) {
    if (nums[i] === target) return i + 1;
    i = nums[i] < target ? parseInt(i + nums.length / 2) : parseInt(i / 2);
  }

  return -1;
};

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
console.log(solution([1, 2, 3, 4, 5, 6], 3));
