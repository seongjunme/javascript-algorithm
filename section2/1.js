const solution = (nums) => {
  return [nums[0], ...nums.filter((num, idx, origin) => origin[idx - 1] < num)];
};

console.log(solution([7, 3, 9, 5, 6, 12]));
