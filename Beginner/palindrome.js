// Write a function that takes in a string that ignores special characters and underscores, is case insensative, ignores spaces and sees if it is a palindrome

function isAPalindrome(string) {
  let reversedString = string.split('').reverse().join()

  if (reversedString.replace(/[^A-Z0-9]/ig, "").toLowerCase() ===
    string.replace(/[^A-Z0-9]/ig, "").toLowerCase()) {

    // ******* Test ********
    console.log(`reversedString = ${reversedString.replace(/[^A-Z0-9]/ig, "").toLowerCase()} \nstring = ${string.replace(/[^A-Z0-9]/ig, "").toLowerCase()}`)
    //***********************

    return true
  } else {
    return false
  }
}

console.log(isAPalindrome('A man, a plan, a canal. Panama'))
console.log(isAPalindrome('My age is 0, 0 si ega ym.'))
console.log(isAPalindrome('.0_0 (:/-\:)0-0'))
console.log(isAPalindrome('Spongebob Squarepants'))