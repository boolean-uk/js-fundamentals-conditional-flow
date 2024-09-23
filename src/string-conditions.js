// 1. Sett answerOne til true hvis STR_ONE er 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars
let answerOne

if (STR_ONE === 'Hello') {
  answerOne = true
} else {
  answerOne = false
}

// 2. Sett answerTwo til true hvis STR_TWO ikke er 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars
let answerTwo

if (STR_TWO !== 'Hello') {
  answerTwo = true
} else {
  answerTwo = false
}

// 3. Sett answerThree til true hvis STR_THREE er lengre enn STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars
let answerThree

if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
} else {
  answerThree = false
}

// 4. Sett answerFour til true hvis STR_FIVE begynner og slutter med samme karakter, uansett store og små bokstaver
const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars
let answerFour

if (STR_FIVE[0].toLowerCase() === STR_FIVE[STR_FIVE.length - 1].toLowerCase()) {
  answerFour = true
} else {
  answerFour = false
}

// 5. Sett answerFive til true hvis STR_SIX begynner og slutter med samme karakter, uansett store og små bokstaver
const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars
let answerFive

if (STR_SIX[0].toLowerCase() === STR_SIX[STR_SIX.length - 1].toLowerCase()) {
  answerFive = true
} else {
  answerFive = false
}

// 6. Sett answerSix til midterste karakter av STR_SEVEN hvis STR_SEVEN har et oddetall antall karakterer
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars
let answerSix

if (STR_SEVEN.length % 2 === 1) {
  answerSix = STR_SEVEN[Math.floor(STR_SEVEN.length / 2)]
}

// 7. Sett answerSeven til de midterste to karakterene av STR_EIGHT hvis STR_EIGHT har et partall antall karakterer
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars
let answerSeven

if (STR_EIGHT.length % 2 === 0) {
  const midIndex = STR_EIGHT.length / 2
  answerSeven = STR_EIGHT[midIndex - 1] + STR_EIGHT[midIndex]
}

// 8. Sett answerEight til den riktige årstiden basert på hva MONTH er satt til
const MONTH = 'January'
let answerEight

if (['December', 'January', 'February'].includes(MONTH)) {
  answerEight = 'Winter'
} else if (['March', 'April', 'May'].includes(MONTH)) {
  answerEight = 'Spring'
} else if (['June', 'July', 'August'].includes(MONTH)) {
  answerEight = 'Summer'
} else if (['September', 'October', 'November'].includes(MONTH)) {
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
