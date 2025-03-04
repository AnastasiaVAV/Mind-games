import getRandomNumber from '../random.js';
import launchTheGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkParity = () => {
  const guestion = getRandomNumber(100);
  const isEven = guestion % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [guestion, correctAnswer];
};

const launchEvenGame = () => launchTheGame(rules, checkParity);

export default launchEvenGame;
