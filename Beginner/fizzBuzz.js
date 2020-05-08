// Write a function that if a number 3 or greater is divisable by 3 returns 'fizz', by 5 returns 'buzz', by both returns 'fizzbuzz', or none returns an empty string

function fizzbuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzbuzz'
  } else if (number % 3 === 0) {
    return 'fizz'
  } else if (number % 5 === 0) {
    return 'buzz'
  } else {
    return ''
  }
}

console.log(fizzbuzz(3))
console.log(fizzbuzz(15))
console.log(fizzbuzz(10))
console.log(fizzbuzz(8))
console.log(fizzbuzz(190))