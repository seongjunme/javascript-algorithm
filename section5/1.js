const solution = (arr1, arr2) => {
  const result = [];
  let p1 = 0,
    p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) result.push(arr1[p1] < arr2[p2] ? arr1[p1++] : arr2[p2++]);
  while (p1 < arr1.length) result.push(arr1[p1++]);
  while (p2 < arr2.length) result.push(arr2[p2++]);

  return result;
};

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
