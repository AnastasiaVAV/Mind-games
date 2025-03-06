import getRandomNumber from '../random.js';
import launchTheGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNumber = 10;
const minNumber = 2;

const getGameRound = () => {
  const question = getRandomNumber(maxNumber, minNumber);
  let correctAnswer = 'yes';
  for (let i = 2; i <= Math.sqrt(question); i += 1) {
    const isPrime = question % i === 0;
    if (isPrime) {
      correctAnswer = 'no';
      break;
    }
  }
  return [question, correctAnswer];
};

const launchGame = () => launchTheGame(rules, getGameRound);

export default launchGame;
