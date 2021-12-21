const solution = (str, target) => {
  const distance = new Map();
  distance.set('toLeft', []);
  distance.set('toRight', []);

  let i = 0,
    j = str.length - 1,
    toL = 1000,
    toR = 1000;

  while (i <= str.length - 1 && j >= 0) {
    str[i] === target ? (toL = 0) : toL++;
    str[j] === target ? (toR = 0) : toR++;

    distance.get('toLeft').push(toL);
    distance.get('toRight').push(toR);
    i++, j--;
  }

  const result = [];
  (i = 0), (j = str.length - 1);

  while (i <= str.length - 1 && j >= 0) {
    result.push(Math.min(distance.get('toLeft')[i], distance.get('toRight')[j]));
    i++, j--;
  }

  return result;
};

console.log(solution('teachermode', 'e'));
