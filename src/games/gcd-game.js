import getRandomNumber from '../random.js';
import launchTheGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const maxNumber = 50;
const minNumber = 1;

const getGameRound = () => {
  let num1 = getRandomNumber(maxNumber, minNumber);
  let num2 = getRandomNumber(maxNumber, minNumber);
  const question = `${num1} ${num2}`;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  const correctAnswer = num1;
  return [question, correctAnswer.toString()];
};

const launchGame = () => launchTheGame(rules, getGameRound);

export default launchGame;
