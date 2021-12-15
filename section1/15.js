const solution = (str) => (str.length % 2 ? str[parseInt(str.length / 2)] : str.slice(parseInt(str.length / 2) - 1, parseInt(str.length / 2) + 1));

console.log(solution('study'));
console.log(solution('good'));
