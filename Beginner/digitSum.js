// Write a function that takes a string and parses out all the numbers and adds them together

function getDigitsSum(str) {
  // check string for numebers
  const foundNumbers = str.match(/\d+/g);

  let sum = 0;

  // if foundNumbers has numbers in the array add them to sum
  if (foundNumbers != null) {
    foundNumbers.forEach((number) => {
      sum += Number(number);
    });
  }
  return sum;
}

console.log(getDigitsSum("13 plus 4"));
console.log(getDigitsSum("2 apples, 12 oranges"));
console.log(getDigitsSum("why no numbers?"));
console.log(getDigitsSum("12345"));
