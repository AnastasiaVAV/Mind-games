import getRandomNumber from '../random.js'

export const rules = 'Find the greatest common divisor of given numbers.'
const minNumber = 1
const maxNumber = 25

export const getGameRound = () => {
  let num1 = getRandomNumber(minNumber, maxNumber)
  let num2 = getRandomNumber(minNumber, maxNumber)
  const question = `${num1} ${num2}`

  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  const correctAnswer = num1
  return [question, correctAnswer.toString()]
}
