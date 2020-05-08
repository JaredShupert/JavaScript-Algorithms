// Write a function that takes in a string and reverses its value

function reverseString(string) {
  return string.split('').reverse().join('')
}

console.log(reverseString('Jared'))
console.log(reverseString('JavaScript'))