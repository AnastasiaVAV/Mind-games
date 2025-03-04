import getRandomCalc from '../calc.js';
import launchTheGame from '../index.js';

const rules = 'What is the result of the expression?';

const checkExpression = () => {
  const [calc, result] = getRandomCalc();
  const question = calc;
  const correctAnswer = result;
  return [question, correctAnswer];
};

const launchCalcGame = () => launchTheGame(rules, checkExpression);

export default launchCalcGame;
