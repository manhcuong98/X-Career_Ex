//The number of people who sit strictly behind you and in your column or to the left

function seatsInTheater(nCols, nRows, col, row) {
  // total number
  let totalSeats = nCols * nRows;

  //new columns & rows
  let newCols = nCols - col + 1;
  let newRows = nRows - row;

  // people behind
  return newCols * newRows;
}

console.log(seatsInTheater(16, 11, 5, 3));
