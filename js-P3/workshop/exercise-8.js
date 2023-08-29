// Exercise 8
// ---------------
// Write an arrow function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  if (nums.length === 0) {
    return undefined; // Return undefined if no arguments are passed
  }

  let sum = 0;
  for (const num of nums) {
    if (typeof num === 'number') {
      sum += num * num; // Square the number and add to the sum
    }
  }

  return sum;
};

console.log(addNumbers(1, 2, 3));
console.log(addNumbers(2, 4, 6));
console.log(addNumbers(1, 'a', 2, 3, 'b', 4));
console.log(addNumbers());
// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
