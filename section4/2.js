const reverse = (arr) => {
  const res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
};

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (arr) => arr.map((el) => parseInt(reverse(el.toString().split('')).join(''))).filter((el) => isPrime(el));

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
