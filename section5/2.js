const solution = (arr1, arr2) => {
  const a = [...arr1],
    b = [...arr2],
    result = [];

  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);

  let p1 = 0,
    p2 = 0;
  while (p1 < a.length && p2 < b.length) {
    if (a[p1] === b[p2]) {
      result.push(a[p1]);
      p1++, p2++;
    } else if (a[p1] < b[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return result;
};

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
