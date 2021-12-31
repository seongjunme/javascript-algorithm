const solution = (pillsu, sulgyae) => {
  let pp = 0,
    sp = 0;
  while (pp < pillsu.length && sp < sulgyae.length) {
    if (pillsu[pp] === sulgyae[sp++]) pp++;
  }

  return pp === pillsu.length ? 'YES' : 'NO';
};

console.log(solution('CBA', 'CBDAGE')); //YES
console.log(solution('CBA', 'CGEADB')); //NO
console.log(solution('AB', 'ACBS')); //YES
console.log(solution('AB', 'BACS')); //NO
