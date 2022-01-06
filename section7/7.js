const solution = (...arr) => [...arr].sort(([x1, y1], [x2, y2]) => (x1 === x2 ? y1 - y2 : x1 - x2));

console.log(solution([2, 7], [1, 3], [1, 2], [2, 5], [3, 6]));
