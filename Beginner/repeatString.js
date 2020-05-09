// Write a function that takes in a string and a number that repeats the string that number of times
// example function('google', 3) -> 'googlegooglegoogle'

function repeatString(str, repetitions) {
  let repeatedString = ''

  for (let i = 0; i < repetitions; i++) {
    repeatedString += str
  }
  return repeatedString
}

console.log(repeatString('google', 3))
console.log(repeatString('facebook', 10))

// You can also now use str.repeat(repetitions)