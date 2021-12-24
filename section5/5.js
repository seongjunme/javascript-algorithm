const solution = (arr, target) => {
  let sum = 0;
  for (let i = 0; i < target; i++) {
    sum += arr[i];
  }
  let max = sum;

  for (let i = target; i < arr.length; i++) {
    sum -= arr[i - target];
    sum += arr[i];

    max = sum > max ? sum : max;
  }

  return max;
};

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
