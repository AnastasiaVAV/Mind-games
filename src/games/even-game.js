import getRandomNumber from '../random.js';
import launchTheGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkParity = () => {
  const question = getRandomNumber(100);
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [question, correctAnswer];
};

const launchEvenGame = () => launchTheGame(rules, checkParity);

export default launchEvenGame;
