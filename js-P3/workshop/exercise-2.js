// Exercise 2
// ---------------
// Write an arrow function that returns the LAST character
// of the string that is passed to it.
//
// - If it's an empty string, return `undefined`
// - If it's not a string, return `undefined`

const lastLetter = (str) => {
  console.log(str);

  let split = str.split("");
  console.log(split);
  let lastLetter = str[str.length - 1];

  if (str === "") {
    return undefined;
  } else {
    return lastLetter;
  }
};

console.log(lastLetter("yep"));

console.log(lastLetter(""));

// /We need to export the function in order for our unit test to have access to it.
module.exports = lastCharacter;
