// Don't edit the code below this line up until 'TODO:'
const NUM_ONE = 92837 // eslint-disable-line no-unused-vars
const NUM_TWO = 92827 // eslint-disable-line no-unused-vars
const ARRAY_ONE = [] // eslint-disable-line no-unused-vars
const ARRAY_TWO = ['Hello', 'Conditions', NUM_ONE] // eslint-disable-line no-unused-vars

// TODO: Implement the tasks below to make the tests pass

// 1. Use conditional statements to set answerOne to false if ARRAY_ONE is not empty
// or true if it is empty
const answerOne = ARRAY_ONE.length === 0
console.log(answerOne)

// 2. Use conditional statements to set answerTwo to false if ARRAY_TWO is not empty
// or true if it is empty
const answerTwo = ARRAY_TWO.length === 0
console.log(answerTwo)

// 3. Use conditional statements to set answerThree to true if NUM_ONE is more than NUM_TWO
const answerThree = NUM_ONE > NUM_TWO

// 4. Use conditional statements to set answerFour to true if NUM_ONE or NUM_TWO are included in ARRAY_TWO
const answerFour = ARRAY_TWO.includes(NUM_ONE) || ARRAY_TWO.includes(NUM_TWO)

// Don't edit the code below this line
module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour
}
