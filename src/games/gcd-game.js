import getRandomGcd from '../gcd.js';
import launchTheGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const checkGreatestComDiv = () => {
  const [numbers, gcd] = getRandomGcd();
  const question = numbers;
  const correctAnswer = gcd;
  return [question, correctAnswer];
};

const launchGcdGame = () => launchTheGame(rules, checkGreatestComDiv);

export default launchGcdGame;
