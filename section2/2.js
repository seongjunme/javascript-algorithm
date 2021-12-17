const solution = (arr) => {
  let mx = 0,
    cnt = 0;

  arr.forEach((el) => {
    if (el > mx) {
      mx = el;
      cnt++;
    }
  });

  return cnt;
};

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
