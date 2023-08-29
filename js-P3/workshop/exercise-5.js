// Exercise 5
// ---------------
// Write an arrow function that returns the character at the specified position in the
// string.

// - If str is not a string, return undefined.
// - If there is no character at the provided index, return undefined.

   const getLetterAtIndex = ([str, index]) => {
     console.log(typeof str);
     console.log(index);

     if (typeof str === 'string') {
       return ` ${undefined} ${typeof index}`;
     } else if (typeof index === undefined) {
       ` ${typeof str} ${undefined}`;
     } else {
       return `${typeof str} ${typeof index}`;
     }

     // Your code here
   };
   console.log(getLetterAtIndex([9, 'i']));

// We need to export the function in order for our unit test to have access to it..
module.exports = getLetterAtIndex;
