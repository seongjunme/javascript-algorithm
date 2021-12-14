const solution = (day, cars) => {
  let cnt = 0;

  for (const car of cars) {
    if (car % 10 === day) {
      cnt += 1;
    }
  }

  return cnt;
};

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
