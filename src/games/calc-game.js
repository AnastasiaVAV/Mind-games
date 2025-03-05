import getRandomCalc from '../calc.js';
import launchTheGame from '../index.js';

const rules = 'What is the result of the expression?';

const checkExpression = () => {
  const [question, correctAnswer] = getRandomCalc();
  return [question, correctAnswer];
};

const launchCalcGame = () => launchTheGame(rules, checkExpression);

export default launchCalcGame;
