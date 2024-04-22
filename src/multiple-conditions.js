// Task 1
const LOWER = 4 // eslint-disable-line no-unused-vars
const UPPER = 17 // eslint-disable-line no-unused-vars
const NUM = 9 // eslint-disable-line no-unused-vars

// 1. Use conditional statements to set the value of the answerOne variable
// to be true if the NUM variable is more than or equal to the LOWER variable
// AND is less than or equal to the UPPER variable
let answerOne = Boolean

if (NUM >= LOWER && NUM <= UPPER) {
  answerOne = true
} else {
  answerOne = false
}

// Task 2
const STR = 'Hi'

// 2. Use conditional statements to set the answerTwo variable below to true
// if the STR variable is 'Hello' or 'Goodbye'
// Set answerTwo to false if it's neither of those
// Run the test after setting STR to 'Hello', then 'Goodbye', then any other value you like
// to verify your code is correct
let answerTwo = Boolean

const acceptedStrings = ['Hello', 'Goodbye']

if (acceptedStrings.includes(STR)) {
  answerTwo = true
} else if (!acceptedStrings.includes(STR)) {
  answerTwo = false
} else {
  console.error(Error)
}

// Task 3
const AGE = 0

// 3. Use conditional statements to set the answerThree variable below to a
// string value based on what the AGE variable is set to.
// The table below shows the string that should be used for each range of
// values that AGE can be.
//
// For example: if AGE is set to 3, answerThree should be set to 'Toddler'
//
// 0      | Baby
// 1-4    | Toddler
// 5-12   | Child
// 13-19  | Teenager
// 20+    | Adult
let answerThree = String

// I found this function on StackOverflow, but I understand how it works
// It takes the min and max values that I want for the array and adds all the values in between to a new array in addition to the minimum value
const ageArray = (min, max) =>
  [...Array(max - min + 1).keys()].map((i) => i + min)

const ageRanges = {
  toddler: ageArray(1, 4),
  child: ageArray(5, 12),
  teenager: ageArray(13, 19)
}

if (AGE === 0) {
  answerThree = 'Baby'
} else if (ageRanges.toddler.includes(AGE)) {
  answerThree = 'Toddler'
} else if (ageRanges.child.includes(AGE)) {
  answerThree = 'Child'
} else if (ageRanges.teenager.includes(AGE)) {
  answerThree = 'Teenager'
} else if (AGE >= 20) {
  answerThree = 'Adult'
} else {
  console.error(Error)
}

// Run the test after changing the AGE value to verify you've successfully
// accounted for each age range

// Don't touch the code below this line
module.exports = {
  answerOne,
  STR,
  answerTwo,
  AGE,
  answerThree
}
