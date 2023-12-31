// Exercise 6
// ---------------
// Write an arrow function accepts an array of values and returns a new array of stringified values.
//

const convertToString = (arr) => {
  // Insert missing solution please
  return arr.map((value) =>
    JSON.stringify(value)
  );
};
console.log(
  convertToString([
    1,
    true,
    { key: 'value' },
    'hello',
  ])
);

// We need to export the function in order for our unit test to have access to it.
module.exports = convertToString;
