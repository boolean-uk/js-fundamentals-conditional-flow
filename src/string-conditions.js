// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne

if (STR_ONE === 'Hello') {
  answerOne = true
} else {
  answerOne = false
}

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo
if (STR_TWO !== 'Hello') {
  answerTwo = true
} else {
  answerTwo = false
}

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree
if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
} else {
  answerThree = false
}
console.log(answerThree)
// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

let answerFour
// Convert STR_FIVE to lowercase for case-insensitive comparison
const lowerCaseStrFive = STR_FIVE.toLowerCase()

if (
  lowerCaseStrFive.charAt(0) ===
  lowerCaseStrFive.charAt(lowerCaseStrFive.length - 1)
) {
  answerFour = true
} else {
  answerFour = false
}

console.log(answerFour) // You can add this line to print the result to the console

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive
const lowerCaseStrSix = STR_SIX.toLowerCase()

if (
  lowerCaseStrSix.charAt(0) ===
  lowerCaseStrSix.charAt(lowerCaseStrSix.length - 1)
) {
  answerFive = true
} else {
  answerFive = false
}
console.log(answerFive)
// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix
if (STR_SEVEN.length % 2 !== 0) {
  // Check if the length is odd
  const middleIndex = Math.floor(STR_SEVEN.length / 2) // Calculate the middle index
  answerSix = STR_SEVEN.charAt(middleIndex) // Get the middle character
} else {
  answerSix = null // If the length is even, set answerSix to null or handle it as needed
}

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven
if (STR_EIGHT.length % 2 === 0) {
  // Check if the length is even
  const middleIndex = STR_EIGHT.length / 2 // Calculate the middle index
  answerSeven = STR_EIGHT.slice(middleIndex - 1, middleIndex + 1) // Get the middle two characters
} else {
  answerSeven = null // If the length is odd, set answerSeven to null or handle it as needed
}
// 8. Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly

const MONTH = 'January'
let answerEight

if (MONTH === 'March' || MONTH === 'April' || MONTH === 'May') {
  answerEight = 'Spring'
} else if (MONTH === 'June' || MONTH === 'July' || MONTH === 'August') {
  answerEight = 'Summer'
} else if (
  MONTH === 'September' ||
  MONTH === 'October' ||
  MONTH === 'November'
) {
  answerEight = 'Autumn'
} else if (
  MONTH === 'December' ||
  MONTH === 'January' ||
  MONTH === 'February'
) {
  answerEight = 'Winter'
}

console.log(answerEight) // You can add this line to print the result to the console

module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
