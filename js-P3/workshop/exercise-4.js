// Exercise 4
// ---------------
// Write an arrow function that expects an array of numbers as input (e.g. [1, 2, 4, 12])
// and returns the sum of the numbers.
//
// - If the array contains any values that are not a number, the function should return undefined.
// - If the array is empty, the function should return undefined.

const sum = (arr) => {
  // your code here
  let sum1 = (arr) => {
    let total = 0;

    arr.forEach((nub) => {
      total += nub;
    });
    if (arr.length === 0) {
      return undefined;
    } else if (typeof total === 'number') {
      return total;
    } else {
      return undefined;
    }
  };
  console.log(sum1([1, 5, 7, 3]));
};

// We need to export the function in order for our unit test to have access to it..
module.exports = sum;
