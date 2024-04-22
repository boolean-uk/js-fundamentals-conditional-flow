const { answer } = require("./boolean-conditions");

// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne;
  if (STR_ONE === 'Hello') {
    answerOne = true;
  }
  console.log(answerOne);

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo;
  if (STR_TWO !== 'Hello') {
    answerTwo = true;
  } 
  console.log(answerTwo);

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree;
  if (STR_THREE.length > STR_FOUR.length) {
    answerThree = true
  }
  console.log(answerThree);

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

let answerFour;
const firstChar = STR_FIVE[0].toLocaleLowerCase();
const lastChar = STR_FIVE[STR_FIVE.length - 1].toLocaleLowerCase();
  if (firstChar === lastChar) {
    answerFour = true;
  }
  console.log(answerFour);


// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive;
  if (STR_SIX[0] === STR_SIX[STR_SIX.length - 1]) {
    answerFive = true
  } 
  console.log(answerFive);

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix;
const middle = STR_SEVEN.length / 2;
  if (STR_SEVEN.length % 2 === 0); {
    return STR_SEVEN.substring(middle -1, middle + 1);}
    answerSix = middle(STR_SEVEN);
    console.log(answerSix);
    
  console.log(answerSix);

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven;
  if (STR_EIGHT.length % 2 === 0) {
    answerSeven = STR_EIGHT.length / 2
  }
  console.log(answerSeven);

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

let answerEight;
  if (MONTH === 'March' || MONTH === 'April' || MONTH === 'May') {
    return 'Spring';
  } else if (MONTH === 'June' || MONTH === 'July' || MONTH === 'August') {
    return 'Summer';
  } else if (MONTH === 'September' || MONTH === 'October' || MONTH === 'November') {
    return 'Autumn';
  } else if (MONTH === 'December' || MONTH === 'January' || MONTH === 'February') {
    return 'Winter';
  }
    console.log(answerEight);

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
