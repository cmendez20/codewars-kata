// We want to generate a function that computes the series starting from 0 and ending until the given number.

// INPUT: one number = count
// OUTPUT: string

// algorithm
// if count < 0 then return "count<0"
// else if count === 0 then return "0=0"
// else
// initialize a sum variable with a value of 0;
// intialize a variable called sequence to an empty string;
// loop up to count with a for loop, set i to 0, i < count, i++
// on each iteration, add i to sum variable and append 'i+' to sequence variable
// after the loop we want to return a template string with a slice of sequence excluding the last index, =, and the sum variable

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`;
    if (count === 0) return `${count}=0`;

    let sum = 0;
    let sequenceString = '';

    for (let i = 0; i <= count; i++) {
      sum += i;
      sequenceString += `${i}+`;
    }
    return `${sequenceString.slice(0, -1)} = ${sum}`;
  };

  return SequenceSum;
})();

console.log(SequenceSum.showSequence(6));

// SequenceSum.showSequence(-15); // "-15<0"
// SequenceSum.showSequence(0); // "0=0"
// SequenceSum.showSequence(6); // "0+1+2+3+4+5+6 = 21"
