// Write a function that takes in a string and capitalizes the first letter of each word
function getTitleCase(str) {
  const stringAsArray = str.split(' ')

  for (let i = 0; i < stringAsArray.length; i++) {
    let firstLetter = stringAsArray[i].slice(0, 1).toUpperCase()
    word = stringAsArray[i].substring(1)
    word = firstLetter + word
    stringAsArray[i] = word
  }

  let titleCaseSentence = stringAsArray.join(' ')

  return titleCaseSentence
}

console.log(getTitleCase('im a coding god'))
console.log(getTitleCase('hello word'))
console.log(getTitleCase('How much wood would a woodchuck chuck'))