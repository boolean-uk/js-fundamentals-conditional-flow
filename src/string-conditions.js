// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello';
let answerOne = STR_ONE === 'Hello';

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye';
let answerTwo = STR_TWO !== 'Hello';

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello';
const STR_FOUR = 'Good';
let answerThree = STR_THREE.length > STR_FOUR.length;

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case
const STR_FIVE = 'Alexandra'.toLowerCase();
let answerFour = STR_FIVE.charAt(0) === STR_FIVE.charAt(STR_FIVE.length - 1);

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case
const STR_SIX = 'Joanna'.toLowerCase();
let answerFive = STR_SIX.charAt(0) === STR_SIX.charAt(STR_SIX.length - 1);

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla';
let answerSix;
if (STR_SEVEN.length % 2 !== 0) {
  answerSix = STR_SEVEN.charAt(Math.floor(STR_SEVEN.length / 2));
}

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex';
let answerSeven;
if (STR_EIGHT.length % 2 === 0) {
  const index = STR_EIGHT.length / 2;
  answerSeven = STR_EIGHT.charAt(index - 1) + STR_EIGHT.charAt(index);
}

// 8. Set answerEight to the appropriate season based on what MONTH is set to
const MONTH = 'January';
let answerEight;
if (MONTH === 'January' || MONTH === 'February' || MONTH === 'December') {
  answerEight = 'Winter';
} else if (MONTH === 'March' || MONTH === 'April' || MONTH === 'May') {
  answerEight = 'Spring';
} else if (MONTH === 'June' || MONTH === 'July' || MONTH === 'August') {
  answerEight = 'Summer';
} else if (MONTH === 'September' || MONTH === 'November' || MONTH === 'October') {
  answerEight = 'Autumn';
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
};
