// Write a method that takes in a string and returns a boolean value on if it contains a digit or not

function isDigit(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
}


console.log(isDigit(2))
console.log(isDigit(''))
console.log(isDigit('j'))
console.log(isDigit('2'))