const solution = (arr, target) => {
  let max = arr.reduce((acc, el) => (acc += el), 0);
  let min = Math.max(...arr);
  let res = Number.MAX_SAFE_INTEGER;

  while (min <= max) {
    const mid = parseInt((min + max) / 2);

    let sum = 0;
    let cnt = 1;
    for (const a of arr) {
      if (sum + a <= mid) {
        sum += a;
      } else {
        sum = a;
        cnt += 1;
      }
    }

    if (cnt <= target) {
      res = Math.min(res, mid);
      max = mid - 1;
    } else if (cnt > target) {
      min = mid + 1;
    }
  }

  return res;
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //17
console.log(solution([1, 1, 1, 1, 1], 4)); //2
console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3)); //24
console.log(
  solution(
    [
      8, 6, 7, 6, 8, 7, 8, 9, 5, 7, 5, 7, 5, 7, 7, 7, 8, 5, 7, 9, 7, 5, 9, 8, 6, 6, 8, 7, 5, 5, 5, 8, 7, 5, 9, 7, 8, 6, 6, 8, 5, 9, 7, 5, 7, 8, 9, 7, 5, 7, 5, 8, 9, 5, 8, 9, 6, 9, 7, 6, 7, 6, 9, 7, 6,
      9, 7, 5, 7, 5, 6, 8, 5, 7, 9, 9, 6, 8, 9, 6, 5, 8, 6, 9, 6, 8, 8, 6, 9, 7, 8, 8, 7, 7, 6, 8, 6, 9, 5, 9,
    ],
    10
  )
); //73
