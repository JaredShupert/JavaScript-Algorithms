// Write a function that takes in an array of numbers and finds what number is missing between 0 and the largest value in the array.

function missingNumber(numberArray) {
  numberArray = numberArray.sort()

  for (let i = 0; i < numberArray.length; i++) {
    if (i != numberArray[i]) {
      return i
    }
  } return -1
}

console.log(missingNumber([0, 5, 6, 7, 9, 3, 1, 4, 2]))
console.log(missingNumber([9, 8, 4, 3, 2, 1, 0, 5, 7]))