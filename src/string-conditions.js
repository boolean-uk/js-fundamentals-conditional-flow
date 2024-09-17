// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

const answerOne = STR_ONE === 'Hello'
console.log(answerOne)

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

const answerTwo = STR_TWO !== 'Hello'
console.log(answerTwo)

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

const answerThree = STR_THREE > STR_FOUR

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

// eslint-disable-next-line prettier/prettier
const answerFour = STR_FIVE[0].toLowerCase() === STR_FIVE[STR_FIVE.length - 1].toLowerCase()
console.log(answerFour)

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

const answerFive =
  STR_SIX[0].toLowerCase === STR_SIX[STR_SIX.length - 1].toLowerCase()

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

const answerSix = STR_SEVEN % 2 !== 0 && STR_SEVEN[(STR_SEVEN.length - 1) / 2]
console.log(answerSix)

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

const answerSeven =
  STR_EIGHT.length % 2 === 0 &&
  STR_EIGHT.slice(STR_EIGHT.length / 2 - 1, STR_EIGHT.length / 2 - 1 + 2)

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

const MONTH = 'December'

const seasons = {
  Winter: ['December', 'January', 'February'],
  Autumn: ['September', 'October', 'November'],
  Summer: ['June', 'July', 'August'],
  Spring: ['March', 'April', 'May']
}

let answerEight
if (seasons.Winter.includes(MONTH)) {
  answerEight = 'Winter'
} else if (seasons.Autumn.includes(MONTH)) {
  answerEight = 'Autumn'
} else if (seasons.Summer.includes(MONTH)) {
  answerEight = 'Summer'
} else {
  answerEight = 'Spring'
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
