// Exercise 1
// ---------------
// Write an arrow function that returns the first character
// of the string that is passed to it.
//
// - If it's an empty string (''), return undefined.

const firstLetter = (str) => {
  console.log(str);

  let split = str.split("");
  console.log(split);
  let firstLetter = str.split("")[0];

  if (str === "") {
    return undefined;
  } else {
    return firstLetter;
  }
};

console.log(firstLetter("hello"));

console.log(firstLetter(""));

// We need t2 export the function in order for our unit test to have access to it.
module.exports = firstLetter;
