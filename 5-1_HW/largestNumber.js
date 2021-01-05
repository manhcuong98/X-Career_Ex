// The largest integer of length n.

const largestNumber = (n) => {
  if (n < 1 || n > 9) {
    console.log(`Please reinput n `);
  } else {
    let max = Math.pow(10, n) - 1;
    console.log(`The largest number has n digits is ${max}`);
  }
};

largestNumber(2);
