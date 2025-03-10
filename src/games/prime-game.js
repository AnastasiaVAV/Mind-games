import getRandomNumber from '../random.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 2;
const maxNumber = 25;

export const getGameRound = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  let correctAnswer = 'yes';
  for (let i = 2; i <= Math.sqrt(question); i += 1) {
    const isPrime = question % i !== 0;
    if (!isPrime) {
      correctAnswer = 'no';
      break;
    }
  }
  return [question, correctAnswer];
};
