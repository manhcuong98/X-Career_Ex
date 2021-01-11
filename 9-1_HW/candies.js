// The total number of pieces of candy the children will eat provided they eat as much they can andd all children eat the same amount

const candies = (n, m) => {
  if (n < 2 || n > 10) {
    return console.log("Please retype n");
  } else {
    if (m < 2 || m > 100) {
      return console.log("Please retype m");
    } else {
      if (m % n === 0) {
        return m;
      }
      const candy = m - (m % n);
      return candy;
    }
  }
};

console.log(candies(7, 25));
