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
    if (arr.slice(i).includes(sum - arr[i])) {
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

/*
  Understanding Recursion 
*/

//check what make recursive not working well
const recursiveArrSum = (arr, initSum = 0) => {
  let sum = initSum;

  console.log("init", arr, arr[0], sum);
  if (arr.length > 0) {
    console.log("if", arr, arr[0], sum);

    sum += arr[0];
    console.log("if", arr, arr[0], sum);

    recursiveArrSum(arr.slice(1), sum);
  }

  console.log("end", arr, arr[0], sum);

  return sum;
};

const recursiveSumArr = (arr, initSum = 0) => {
  let sum = initSum;

  if (arr.length > 0) {
    sum += arr[0];
    console.log(sum);
    recursiveSumArr(arr.slice(1), sum);
  }
};

const recursiveMultiplication = (num, limit = 0) => {
  if (limit <= 10) {
    console.log(`${num} * ${limit} = ${num * limit}`);
    recursiveMultiplication(num, limit + 1);
  }
};
