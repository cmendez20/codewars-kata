function alphabetPosition(text) {
  const letters = text
    .toLowerCase()
    .trim()
    .split('')
    .filter(letter => /[a-zA-Z]/.test(letter));

  const sentence = letters.join('');

  // could have done positionArray.map().join(' ') instead
  const positionArray = [];
  let i = 0;
  while (i < sentence.length) {
    positionArray.push(sentence.charCodeAt(i) - 96);
    i++;
  }
  return positionArray.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// alphabetPosition("The sunset sets at twelve o' clock."); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
// alphabetPosition('The narwhal bacons at midnight.'); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
