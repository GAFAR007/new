// Exercise 3
// ---------------
// Write an arrow function that expects 2 numbers as input (e.g. 1, 2)
// and returns the sum of the two numbers.
//
// - If anything other than 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
// `typeof 3` returns 'number'

const sum = (num1, num2) => {
  let type1 = typeof num1;
  console.log(type1);
  let type2 = typeof num2;
  console.log(type2);
  if (type1 !== 'number' || type2 !== 'number') {
    return undefined;
  } else {
    return num1 + num2;
  }
  // Your code here
};
//sum(1, 3);
console.log(sum(1, 3));
console.log(sum(1, '3'));
// We need to export the function in order for our unit test to have access to it.
module.exports = sum;
