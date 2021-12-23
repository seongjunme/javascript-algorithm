const solution = (arr, target) => {
  let sum = 0,
    left = 0,
    right = 0,
    res = 0;

  while (right < arr.length) {
    if (sum + arr[right] > target) {
      sum -= arr[left++];
    } else if (sum + arr[right] < target) {
      sum += arr[right++];
    } else {
      sum += arr[right++];
      res++;
    }
  }

  return res;
};

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
