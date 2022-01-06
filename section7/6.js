const solution = (arr) => [...arr].sort((a, b) => a - b).reduce((res, num, i) => (num !== arr[i] ? [...res, i + 1] : res), []);

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
