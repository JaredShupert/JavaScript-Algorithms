// Write a function that takes in an array of positive numbers and and returns the first number that is duplicated.
// if no duplicates return -1

function findFirstDuplicate(numArray) {
  let duplicateObject = {};

  for (const num of numArray) {
    if (duplicateObject.hasOwnProperty(num)) {
      return num;
    }
    duplicateObject[num] = num;
  }
  return -1;
}

console.log(findFirstDuplicate([2, 3, 3, 4, 5, 6, 2]));
console.log(findFirstDuplicate([1, 2, 3]));
