// Write a function that takes in a string and finds out if it is a valid time or not
// Input format will come like this XX:XX
// The time should be between 00:00 23:59

function isValidTime(time) {
  let t = time.split(':')
  let hours = t[0]
  let minutes = t[1]

  if (hours <= 23 && minutes <= 59) {
    return true
  } else {
    return false
  }
}

console.log(isValidTime('23:30'))
console.log(isValidTime('23:60'))
console.log(isValidTime('24:00'))
console.log(isValidTime('00:00'))