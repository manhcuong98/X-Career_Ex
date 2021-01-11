// The largest integer not greater than bound that is divisible by divisor

const maxMultiple = (divisor, bound) => {
  if (divisor < 2 || divisor > 10) {
    return console.log("Please retype divisor");
  } else {
    if (bound < 2 || bound > 100) {
      return console.log("Please retype bound");
    } else {
      if (bound % divisor === 0) {
        return bound;
      }
      const maxMulti = bound - (bound % divisor);
      return maxMulti;
    }
  }
};

console.log(maxMultiple(3, 14));
