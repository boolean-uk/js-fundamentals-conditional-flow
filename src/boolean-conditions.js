// Initialise the didPass variable with a boolean value
let didPass = true // You can change this to false to test the other condition
// 1. Create a conditional statement that changes the answer variable to the string
// "Well done, you passed!" if didPass is true, or "Sorry, try again!" if didPass
// is false
let answer
if (didPass) {
  answer = 'Well done, you passed!'
} else {
  answer = 'Sorry, try again!'
}
console.log(answer)

// 2. When you're done and the test passes, changing didPass to the opposite boolean
// and run the test again to make sure it still passes

didPass = !didPass // Toggle the value of didPass (true to false or vice versa)

if (didPass) {
  answer = 'Well done, you passed!'
} else {
  answer = 'Sorry, try again!'
}

console.log(answer) // Output the value of the answer variable

// Don't change the code below this line
module.exports = {
  didPass,
  answer
}
