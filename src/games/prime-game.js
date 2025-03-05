import getRandomNumber from '../random.js';
import launchTheGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = () => {
  const question = getRandomNumber(10, 2);
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

const launchPrimeGame = () => launchTheGame(rules, checkPrime);

export default launchPrimeGame;
