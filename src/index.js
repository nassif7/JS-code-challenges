// Daily Challange -1-
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

// Daily Challange -2-
const getProduct = (arr) => {
  const product = arr.reduce((a, c) => a * c, 1);
  return arr.map((i) => product / i);
};
