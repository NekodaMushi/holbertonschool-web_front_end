function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true
}


function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) count++;
  }
  return count;
};

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
