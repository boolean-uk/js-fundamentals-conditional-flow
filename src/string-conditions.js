// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne = Boolean

if (STR_ONE === 'Hello') {
  answerOne = true
}

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo = Boolean

if (STR_TWO !== 'Hello') {
  answerTwo = true
}

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree = Boolean

if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
}

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

let answerFour = Boolean

if (STR_FIVE[0].toLowerCase() === STR_FIVE[STR_FIVE.length - 1].toLowerCase()) {
  answerFour = true
} else {
  answerFour = false
}

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive = Boolean

if (STR_SIX[0].toLowerCase() === STR_SIX[STR_SIX.length - 1].toLowerCase()) {
  answerFive = true
} else {
  answerFive = false
}

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix = String

if (STR_SEVEN.length % 2 === 1) {
  answerSix = STR_SEVEN[Math.floor(STR_SEVEN.length / 2)]
}

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven = String

if (STR_EIGHT.length % 2 === 0) {
  answerSeven = STR_EIGHT.substring(
    Math.ceil(STR_EIGHT.length / 2) - 1,
    Math.floor(STR_EIGHT.length / 2 + 1)
  )
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

let answerEight = String

const seasons = {
  winter: ['December', 'January', 'February'],
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November']
}

if (seasons.winter.includes(MONTH)) {
  answerEight = 'Winter'
} else if (seasons.spring.includes(MONTH)) {
  answerEight = 'Spring'
} else if (seasons.summer.includes(MONTH)) {
  answerEight = 'Summer'
} else if (seasons.autumn.includes(MONTH)) {
  answerEight = 'Autumn'
} else {
  console.error(Error)
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
