// Write a function that takes in a sentence and returns the length of the longest word
// Ignore punctuation and special characters

function getLongestWord(sentence) {
  let longestWordLength = 0

  sentence = sentence.replace(/[^A-Z0-9 ]/ig, "")
  let sentenceAsArray = sentence.split(' ')

  sentenceAsArray.forEach(word => {
    if (word.length > longestWordLength) {
      longestWordLength = word.length
    }
  })
  return longestWordLength
}

console.log(getLongestWord('how are you today?'))
console.log(getLongestWord('JavaScript is awesome!!!!'))