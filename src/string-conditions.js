// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne

// Plan
// StringOne is Hello therefore the outcome should be true

if (STR_ONE === 'Hello') {
  answerOne = true
}
console.log(answerOne)
// TRUE

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo

// Plan
// STR_two is goodbye and not hello therefore false

if (STR_TWO !== 'Hello') {
  answerTwo = true
} else {
  answerTwo = false
}
console.log(answerTwo)
// TRUe because str_two is not hello

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree

// Plan
// STR_ three is longer than str_four, so then true

if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
} else {
  answerThree = false
}

console.log(answerThree)
// TRUE  because str3 is longer than str4

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

let answerFour

// plan
// answerFour to true if Alexandra, starts and ends with the same character
// Convert the string to lowerCase
// Then compare the first and last letter

const lowercaseString = STR_FIVE.toLowerCase()
console.log(lowercaseString)
// alexandra

if (STR_FIVE.startsWith('A', 'a') || STR_FIVE.endsWith('A', 'a')) {
  answerFour = true
} else {
  answerFour = false
}
console.log(answerFour)

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive

// Plan
// STR_SIX starts and ends with the same character, regardless of case, then run true
// convert the string to lowercase
// chartOf()

const lowerString = STR_SIX.toLowerCase()
console.log(lowerString)
// joanna

// gets the character 0 and compares the last letter on the string
if (STR_SIX.charAt(0) === STR_SIX.charAt(STR_SIX.length - 1)) {
  answerFive = true
} else {
  answerFive = false
}

console.log(answerFive)
// False

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix

//  Plan
// Set answerSix to middle character of STR-SEVEN, so would be 'y', if kayla is odd number

if (STR_SEVEN.length % 2 === 1) {
  const middChar = STR_SEVEN.charAt(Math.floor(STR_SEVEN.length / 2))
  // console.log(middChar)
  answerSix = middChar
} else {
  answerSix = "Kayla's length is even"
}

console.log(answerSix)

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven

// Plan
// set answerseven to the middle two chars of Alex if Alex has even numbers

if (STR_EIGHT.length % 2 === 0) {
  const midInd = STR_EIGHT.length / 2 - 1 // get the middle position
  answerSeven = STR_EIGHT.substring(midInd, midInd + 2)
} else {
  answerSeven = 'length is not even'
}
console.log(answerSeven)
// le

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

if (MONTH === 'December' || MONTH === 'January' || MONTH === 'February') {
  answerEight = 'Winter'
} else if (MONTH === 'March' || MONTH === 'April' || MONTH === 'May') {
  answerEight = 'Spring'
} else if (MONTH === 'June' || MONTH === 'July' || MONTH === 'August') {
  answerEight = 'Summer'
} else if (
  MONTH === 'September' ||
  MONTH === 'October' ||
  MONTH === 'November'
) {
  answerEight = 'Autumn'
} else {
  answerEight = 'Invalid Entry'
}

console.log(answerEight)

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
