// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne = STR_ONE === 'Hello'

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo = STR_TWO !== 'Hello'

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree = STR_THREE.length > STR_FOUR.length

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case
const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

let answerFour = STR_FIVE.toLowerCase()[0] === STR_FIVE.toLowerCase()[STR_FIVE.length - 1]

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case
const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive = STR_SIX.toLowerCase()[0] === STR_SIX.toLowerCase()[STR_SIX.length -1]

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix;

if (STR_SEVEN % 2 != 0){
  answerSix = STR_SEVEN[(STR_SEVEN.length / 2) - 0.5]
}

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven;

if (STR_EIGHT.length % 2 === 0){
  answerSeven = `${STR_EIGHT[(STR_EIGHT.length / 2) - 1]}${STR_EIGHT[STR_EIGHT.length / 2]}`
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

const monthSeason = {
  january: 'Winter',
  february: 'Winter',
  march: 'Winter',
  april: 'Spring',
  may: 'Spring',
  june: 'Summer',
  july: 'Summer',
  august: 'Summer',
  september: 'Autumn',
  october: 'Autumn',
  november: 'Autumn',
  december: 'Winter'
}

let answerEight = monthSeason[MONTH.toLowerCase()]

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
