// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne = STR_ONE === 'Hello' ? true : false

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo = STR_TWO !== 'Hello' ? true : false

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree = STR_THREE.length > STR_FOUR.length ? true : false

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

/**
 * @param {string} s
 * @return {boolean}
 */
function firstAndLastCharsSame(s) {
  return s.charAt(0).toLowerCase() === s.charAt(s.length - 1).toLowerCase()
}

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

let answerFour = firstAndLastCharsSame(STR_FIVE) ? true : false

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive = firstAndLastCharsSame(STR_SIX) ? true : false

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix
if ((STR_SEVEN.length & 1) === 1) {
  answerSix = STR_SEVEN.charAt(Math.floor(STR_SEVEN.length / 2))
}

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven
if ((STR_EIGHT.length & 1) === 0) {
  const middle = STR_EIGHT.length / 2
  answerSeven = STR_EIGHT.substring(middle - 1, middle + 1)
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
const monthToSeason = new Map()
monthToSeason.set('January', 'Winter')
monthToSeason.set('February', 'Winter')
monthToSeason.set('March', 'Spring')
monthToSeason.set('April', 'Spring')
monthToSeason.set('May', 'Spring')
monthToSeason.set('June', 'Summer')
monthToSeason.set('July', 'Summer')
monthToSeason.set('August', 'Summer')
monthToSeason.set('September', 'Autumn')
monthToSeason.set('October', 'Autumn')
monthToSeason.set('November', 'Autumn')
monthToSeason.set('December', 'Winter')

let answerEight = monthToSeason.get(MONTH)

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
