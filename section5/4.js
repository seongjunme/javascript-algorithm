const solution = (arr, target) => {
  let res = 0,
    left = 0,
    right = 0,
    sum = 0;

  for (right; right < arr.length; right++) {
    sum += arr[right];

    if (sum <= target) {
      for (let i = 1; i <= right - left + 1; i++) {
        res += i;
      }
    } else {
      while (sum <= target) {
        sum -= arr[left++];
      }
    }
  }

  return res;
};
console.log(solution([1, 3, 1, 2, 3], 5));
