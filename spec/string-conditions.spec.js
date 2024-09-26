const {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
} = require('../src/string-conditions')

describe('answerOne', () => {
  it('should be true', () => {
    expect(answerOne).toBe(true)
  })
})

describe('answerTwo', () => {
  it('should be true', () => {
    expect(answerTwo).toBe(true)
  })
})

describe('answerThree', () => {
  it('should be true', () => {
    expect(answerThree).toBe(true)
  })
})

describe('answerFour', () => {
  it('should be true', () => {
    expect(answerFour).toBe(true)
  })
})

describe('answerFive', () => {
  it('should be false', () => {
    expect(answerFive).toBe(false)
  })
})

describe('answerSix', () => {
  it("should be 'y'", () => {
    expect(answerSix).toBe('y')
  })
})

describe('answerSeven', () => {
  it("should be 'le'", () => {
    expect(answerSeven).toBe('le')
  })
})

describe('answerEight', () => {
  const seasons = {
    Winter: ['December', 'January', 'February'],
    Autumn: ['September', 'October', 'November'],
    Summer: ['June', 'July', 'August'],
    Spring: ['March', 'April', 'May']
  }

  const expected = Object.keys(seasons).find((season) =>
    seasons[season].includes(MONTH)
  )

  it(`should be '${expected}'`, () => {
    expect(answerEight).toEqual(expected)
  })
})
