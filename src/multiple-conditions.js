// Task 1
const LOWER = 4 // eslint-disable-line no-unused-vars
const UPPER = 17 // eslint-disable-line no-unused-vars
const NUM = 9 // eslint-disable-line no-unused-vars

// 1. Use conditional statements to set the value of the answerOne variable
// to be true if the NUM variable is more than or equal to the LOWER variable
// AND is less than or equal to the UPPER variable

let answerOne = NUM >= LOWER && NUM <= UPPER 

// Task 2
const STR = null

// 2. Use conditional statements to set the answerTwo variable below to true
// if the STR variable is 'Hello' or 'Goodbye'
// Set answerTwo to false if it's neither of those
// Run the test after setting STR to 'Hello', then 'Goodbye', then any other value you like
// to verify your code is correct

let answerTwo = STR === 'Hello' || STR === 'Goodbye'

// Task 3
const AGE = 20

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

const ageStage = {
  baby: [0],
  toddler: [1, 2, 3, 4],
  child: [5, 6, 7, 8, 9, 10, 11, 12],
  teenager: [13, 14, 15, 16, 17, 18, 19],
}

let answerThree

if (ageStage.baby.includes(AGE)){
  answerThree = 'Baby'
} else if (ageStage.toddler.includes(AGE)){
  answerThree = 'Toddler'
} else if (ageStage.child.includes(AGE)){
  answerThree = 'Child'
} else if (ageStage.teenager.includes(AGE)){
  answerThree = 'Teenager'
} else {
  answerThree = 'Adult'
}
console.log(answerThree)
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
