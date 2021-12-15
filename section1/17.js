const solution = (arr) => arr.filter((el, i) => arr.indexOf(el) === i);

console.log(solution(['good', 'time', 'good', 'time', 'student']));
