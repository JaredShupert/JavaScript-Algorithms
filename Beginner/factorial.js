// Write a function that takes in a number and returns the factorial
// example 5! = 1 * 2 * 3 * 4 * 5 = 120 so an input of 5 would return 120

function getFactorial(number) {
  let output = 1

  if (number === 0) {
    return 1
  } else {
    for (let i = 1; i <= number; i++) {
      output *= i
    }
  }
  return output
}

console.log(getFactorial(5))
console.log(getFactorial(4))
console.log(getFactorial(0))
console.log(getFactorial(10))
console.log(getFactorial(-8))