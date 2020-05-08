// Write a function that takes in a string for your first name, a string for your last name and returns them as an introduction. example 'Hi, my name is Jared Shupert.'

function introduction(firstName, lastName) {
  return `Hi, my name is ${firstName} ${lastName}.`
}

console.log(introduction('Jared', 'Shupert'))
console.log(introduction('Billy', 'Bob'))