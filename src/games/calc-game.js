import getRandomNumber from '../random.js';
import launchTheGame from '../index.js';

const rules = 'What is the result of the expression?';
const operations = ['-', '+', '*'];

const getRandomOperation = () => {
  const operation = operations[getRandomNumber(operations.length, 0)];
  return operation;
};

const maxNumber = 25;

const getGameRound = () => {
  const num1 = getRandomNumber(maxNumber);
  const num2 = getRandomNumber(maxNumber);
  const operation = getRandomOperation();
  const question = `${num1} ${operation} ${num2}`;
  let correctAnswer;

  switch (operation) {
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      return null;
  }
  return [question, correctAnswer.toString()];
};

const launchGame = () => launchTheGame(rules, getGameRound);

export default launchGame;
