// Exercise 9
// ---------------
// Write an arrow function accepts two arrays and returns a new array with the elements that are unique to array1
// and array2.
// An element is unique if it only appears in one of the arrays.
// It is allowed to appear multiple times in the same array.
//
// - If there are no unique elements return an empty array.
// - If the inputs are anything other than arrays, return undefined.

// For example:
// uniqueElements([0,1,2,3], [1,3,4,5]); // [0,2,4,5]
// uniqueElements([1,2,3], [3,2,1]); // []
// uniqueElements(2); // undefined, not an array

// HINTS:
//   - You'll need to do a nested iteration, to compare every item in array 1
//     to every item in array 2
//   - You will need to run your logic 2 times, flipping the order:
//     - Once to get the unique elements in the first array
//     - A second time to get the unique elements in the second array
//
// THIS IS A VERY HARD PROBLEM.
// If you struggle with it, set it aside. In a few weeks, you might find the
// solution comes more quickly :)

const uniqueElements = (arr1, arr2) => {
  if (
    !Array.isArray(arr1) ||
    !Array.isArray(arr2)
  ) {
    return undefined; // Return undefined if inputs are not arrays
  }

  const uniqueArr1 = arr1.filter(
    (element) => !arr2.includes(element)
  );
  const uniqueArr2 = arr2.filter(
    (element) => !arr1.includes(element)
  );

  return uniqueArr1.concat(uniqueArr2);
};

console.log(
  uniqueElements([0, 1, 2, 3], [1, 3, 4, 5])
);
console.log(uniqueElements([1, 2, 3], [3, 2, 1]));
console.log(
  uniqueElements([1, 2, 3], 'not an array')
);
// We need to export the function in order for our unit test to have access to it.
module.exports = uniqueElements;
