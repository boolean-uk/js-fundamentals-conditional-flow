// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

const answerOne = STR_ONE === 'Hello'

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

const answerTwo = STR_TWO === 'Goodbye'

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

const answerThree = STR_THREE.length > STR_FOUR.length

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

const answerFour = STR_FIVE.toLowerCase().endsWith(
  STR_FIVE.toLowerCase().charAt(0)
)

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

const answerFive = STR_SIX.toLowerCase().endsWith(
  STR_SIX.toLowerCase().charAt(0)
)

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix
const stringCharLength = STR_SEVEN.length
if (!Number.isInteger(stringCharLength / 2)) {
  answerSix = STR_SEVEN.charAt((stringCharLength - 1) / 2)
}

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven

const stringCharLength2 = STR_EIGHT.length
if (Number.isInteger(stringCharLength2)) {
  answerSeven =
    STR_EIGHT.charAt(stringCharLength2 / 2 - 1) +
    STR_EIGHT.charAt(stringCharLength2 / 2)
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
// const seasonDictonary = {
//   January: 'Winter',
//   February: 'Winter',
//   March: 'Spring',
//   April: 'Spring',
//   May: 'Spring',
//   June: 'Summer',
//   July: 'Summer',
//   August:'Summer',
//   September: 'Autumn',
//   October: 'Autumn',
//   November: 'Autumn',
//   December: 'Winter'
// }
// answerEight = seasonDictonary[MONTH]

if (MONTH === 'January' || MONTH === 'February' || MONTH === 'December') {
  answerEight = 'Winter'
} else if (MONTH === 'April' || MONTH === 'May' || MONTH === 'March') {
  answerEight = 'Spring'
} else if (MONTH === 'June' || MONTH === 'July' || MONTH === 'August') {
  answerEight = 'Summer'
} else if (
  MONTH === 'September' ||
  MONTH === 'October' ||
  MONTH === 'November'
) {
  answerEight = 'Autumn'
}
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
