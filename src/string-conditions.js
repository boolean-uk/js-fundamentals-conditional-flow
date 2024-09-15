/* eslint-disable camelcase */
// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne
if (STR_ONE === 'Hello') {
  answerOne = true
}
console.log('answerOne', answerOne)
// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo
if (STR_TWO !== 'Hello') {
  answerTwo = true
}
console.log('answerTwo', answerTwo)

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree
if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
}
console.log('answerThree', answerThree)

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

let answerFour

const STR_FIVEfirstLetter = STR_FIVE.charAt(0)
const STR_FIVElastLetter = STR_FIVE.charAt(STR_FIVE.length - 1)
if (STR_FIVEfirstLetter.toLowerCase() === STR_FIVElastLetter.toLowerCase()) {
  answerFour = true
}

console.log('answerFour', answerFour)
// console.log('STR_FIVE Firstletter', STR_FIVEfirstLetter)
// console.log('STR_FIVE lastLetter', STR_FIVElastLetter)

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars
const STR_SIXfirstLetter = STR_SIX.charAt(0)
const STR_SIXlastLetter = STR_SIX.charAt(STR_SIX.length - 1)
let answerFive

if (STR_SIXfirstLetter === STR_SIXlastLetter) {
  answerFive = true
} else {
  answerFive = false
}

console.log('answerFive', answerFive)
// console.log('STR_SIXfirstLetter', STR_SIXfirstLetter)
// console.log('STR_SIXlastLetter', STR_SIXlastLetter)

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix
const STR_SEVENlength = STR_SEVEN.length
const STR_SEVENmiddle = STR_SEVENlength / 2

if (STR_SEVENlength % 2 === 1) {
  answerSix = STR_SEVEN.charAt(STR_SEVENmiddle)
}

console.log('answerSix', answerSix)
// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven
const STR_EIGHTlength = STR_EIGHT.length
const STR_EIGHTmiddle = STR_EIGHTlength / 2

if (STR_EIGHTlength % 2 === 0) {
  answerSeven =
    STR_EIGHT.charAt(STR_EIGHTmiddle - 1) + STR_EIGHT.charAt(STR_EIGHTmiddle)
}
console.log('answerSeven', answerSeven)
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
console.log('answerEight', answerEight)

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
