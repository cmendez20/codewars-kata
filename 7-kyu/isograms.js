// INPUT: String
// OUTPUT: boolean value
// REQUIREMENTS:
// - return true if a single word has no repeating letters, consecutive or non-consecutive else return false
// - an empty string is an isIsogram
// - ignore letter case

// DATA STRUCTURES:
// - string
// - primative boolean value

// ALGORITHM:
// - if the input is an empty string, return true;
// - since we are ignoring case, we can set our input string to lowercase() to ensure everything is set to the same case
// - now turn string to array so we can use array methods
// - we can pop the last element off the letters array
// - this will mutate the original array and return the value of the element that was removed
// - using that return value, we can use .includes to see if the array still includes that value
// - if it doesn't then keep popping until they're are no more letters
// - if .includes does return true, then return false

function isIsogram(str) {
  if (str.length === 0) return true;
  const letters = str.toLowerCase().split('');
  let strLength = str.length;
  let i = 0;
  let duplicateExist = false;

  while (i < strLength) {
    if (letters.includes(letters.pop())) duplicateExist = true;
    i++;
  }

  return !duplicateExist;
}

// isIsogram('Dermatoglyphics'); // true
// isIsogram('isogram'); // true
// isIsogram('aba'); // false, "same chars may not be adjacent"
// isIsogram('moOse'); // false, "same chars may not be same case"
// isIsogram('isIsogram'); // false
// isIsogram(''); // true, "an empty string is a valid isogram"

// console.log(isIsogram('Dermatoglyphics')); // true
// console.log(isIsogram('isogram')); // true
// console.log(isIsogram('aba')); // false
// console.log(isIsogram('moOse')); // false
console.log(isIsogram('isIsogram')); // false
// console.log(isIsogram('')); // true
