// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars
let answerOne
if (STR_ONE === 'Hello') {
  answerOne = true
}

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars
let answerTwo
if (STR_TWO !== 'Hello') {
  answerTwo = true
}

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars
let answerThree
if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
}

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars
let answerFour
// const START_CHAR = (STR_FIVE.slice(0, 1)).toLowerCase()
// const END_CHAR = (STR_FIVE.slice(-1)).toLowerCase()
// if (START_CHAR === END_CHAR) {
//   answerFour = true
// }

const START_CHAR = STR_FIVE.charAt(0).toLowerCase()
const END_CHAR = STR_FIVE.charAt(STR_FIVE.length - 1).toLowerCase();
if (START_CHAR === END_CHAR) {
  answerFour = true;
}

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars
let answerFive
const STR_SIX_START_CHAR = STR_SIX.charAt(0).toLowerCase();
const STR_SIX_END_CHAR = STR_SIX.charAt(STR_SIX.length - 1).toLowerCase();
if (STR_SIX_START_CHAR === STR_SIX_END_CHAR) {
  answerFive = true;
} else {
  answerFive = false
}

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars
let answerSix

if (STR_SEVEN.length % 2 !== 0) {
  const NUM = Math.floor(STR_SEVEN.length / 2);
  const NEW_NUM = STR_SEVEN.charAt(NUM)
  answerSix = NEW_NUM;
} else {
  answerSix = 'String character is even.';
}

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars
let answerSeven
if (STR_EIGHT.length % 2 === 0) {
  const NUM = STR_EIGHT.length / 2;
  answerSeven = STR_EIGHT.slice(NUM - 1, NUM + 1);
} else {
  answerSeven = 'String character is odd.';
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

// OPTION A
// if (MONTH == "December" || MONTH === "January" || MONTH === "February") {
//   answerEight = "Winter";
// } else if (MONTH == "March" || MONTH === "April" || MONTH === "May") {
//   answerEight = "Spring";
// } else if (MONTH == "June" || MONTH === "July" || MONTH === "August") {
//   answerEight = "Summer";
// } else if (MONTH == "September" || MONTH === "October" || MONTH === "November") {
//   answerEight = "Autumn";
// }

// OPTION B
const WINTER = ["December", "January", "February"];
const SPRING = ["March", "April", "May"];
const SUMMER = ["June", "July", "August"];
const AUTUMN = ["September", "October", "November"];

if (WINTER.includes(MONTH)) {
  answerEight = "Winter";
} else if (SPRING.includes(MONTH)) {
  answerEight = "Spring";
} else if (SUMMER.includes(MONTH)) {
  answerEight = "Summer";
} else if (AUTUMN.includes(MONTH)) {
  answerEight = "Autumn";
} else {
  return `${MONTH} is not a valid month`;
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
