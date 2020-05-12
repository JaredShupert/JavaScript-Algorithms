// Write a function that takes in an array of numbers and finds out if there are any duplicate numbers

function foundDuplicate(numberArray) {
  numberArray = numberArray.sort()

  for (let i = 1; i <= numberArray.length; i++) {
    if (numberArray[i] === numberArray[i - 1]) {
      return true
    }
  }
  return false
}

console.log(foundDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(foundDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2]))