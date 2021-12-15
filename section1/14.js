const solution = (arr) => arr.reduce((mx, ch) => (ch.length > mx.length ? ch : mx), '');

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
