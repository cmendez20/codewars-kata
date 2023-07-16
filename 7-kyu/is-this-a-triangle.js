// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// PROBLEM:
// If the sum of any two sides is greater than third side, then the triangle can be constructed otherwise not.
// input: 3 integer values
// output: boolean value: true or false

// EXAMPLES:

// EDGE CASES
// what if we are given negative numbers? how do we want to handle it
// isTriangle(1, -2, 2); // false

// VALID
// isTriangle(1, 2, 2); // true
// isTriangle(7, 2, 2); // false

// DATA STRUCTURES
// numbers => boolean value

// ALGORITHM
// convert the input arguments to an array using the spread operator
// loop: loop through and make sure every number is greater than 0, if not than return false;
// initialize our side lengths variables from our array (sideOne, sideTwo, sideThree)
// if sideOne + sideTwo > sideThree, return false
// if sideOne + sideThree > sideTwo, return false
// if sideTwo + sideThree > sideOne, return false

// return true:

function isTriangle(a, b, c) {
  const args = [...arguments];
  if (!args.every(num => num > 0)) return false;

  const sideOne = args[0];
  const sideTwo = args[1];
  const sideThree = args[2];

  if (!(sideOne + sideTwo > sideThree)) return false;
  if (!(sideOne + sideThree > sideTwo)) return false;
  if (!(sideTwo + sideThree > sideOne)) return false;

  return true;
}

console.log(isTriangle(1, -2, 2)); // false
console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(8, 3, 5)); // false
