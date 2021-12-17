const solution = (arr) => {
  const rank = arr.map((el) => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] < arr[j]) {
        rank[i]++;
      }
    }
  }

  return rank;
};

console.log(solution([87, 89, 92, 100, 76]));
