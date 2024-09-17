// Initialise the didPass variable with a boolean value
const didPass = true
console.log('is didPass boolean?', didPass)

// 1. Create a conditional statement that changes the answer variable to the string
// "Well done, you passed!" if didPass is true, or "Sorry, try again!" if didPass
// is false
const answer = didPass === true ? 'Well done, you passed!' : 'Sorry, try again!'
console.log('1- ', answer)

// 2. When you're done and the test passes, changing didPass to the opposite boolean
// and run the test again to make sure it still passes

// Don't change the code below this line
module.exports = {
  didPass,
  answer
}
