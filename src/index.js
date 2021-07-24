const checkPairsWithSum = (arr, sum) => {
  // let result = false
  // for (let i = 0; i < arr.length; i++) {
  //   const newArr = arr.filter((x) => x !== arr[i]);
  //   for (let z = 0; z < newArr.length; z++) {
  //     if (arr[i] + newArr[z] === num) {
  //       result =  true;
  //     }
  //   }
  // }
  // return result

  for (let i = 0; i < arr.length; i++) {
    if (arr.filter((x) => arr[i] !== x).includes(sum - arr[i])) {
      return true;
    }
  }

  return false;
};

const getProduct = (arr) => {
  const product = arr.reduce((a, c) => a * c, 1);
  return arr.map((i) => product / i);
};

const isPrime = (n) => {
  const positiveInt = Math.abs(n);
  if (positiveInt < 2) return false;

  for (let i = 2; i <= positiveInt / 2; i++) {
    if (positiveInt % i === 0) return false;
  }

  return true;
};

const findPrimesinRange = (startAt, endsAt) => {
  let primes = [];
  for (let n = startAt; n <= endsAt; n++) {
    if (isPrime(n)) {
      primes.push(n);
    }
  }
  return primes;
};

const getPrimes = (nPrimes, startAt) => {
  let primes = [];
  for (let n = startAt; primes.length < nPrimes; n++) {
    if (isPrime(n)) {
      primes.push(n);
    }
  }
  return primes;
};

const rotateAnArrayOnePositionToLeft = (arr) => {
  const first = arr.shift();
  return [...arr, first];
};

const rotateAnArrayOnePositionToRight = (arr) => {
  const last = arr.pop();
  return [last, ...arr];
};

const reverseArray = (arr) => {
  const reversed = [];

  for (let i of arr) {
    reversed.unshift(i);
  }

  return reversed;
};
// Hanoi tower
const hanoi = (disc, src, aux, dst) => {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    console.log("Move disc " + disc + " from " + src + " to " + dst);
    hanoi(disc - 1, aux, src, dst);
  }
};
