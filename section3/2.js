const isPalindrome = (str) => {
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++, j--;
  }

  return true;
};

const solution = (str) => isPalindrome(str.toUpperCase().replace(/[^A-Z0-9]/g, ''));

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));
console.log(solution('A man, a plan, a canal: Panama'));
console.log(solution('race a car'));
console.log(solution('0P'));
