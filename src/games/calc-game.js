import getRandomNumber from '../random.js';

export const rules = 'What is the result of the expression?';
const operations = ['-', '+', '*'];
const minNumber = 0;
const maxNumber = 10;

const getRandomOperation = () => {
  const operation = operations[getRandomNumber(0, operations.length)];
  return operation;
};

export const getGameRound = () => {
  const num1 = getRandomNumber(minNumber, maxNumber);
  const num2 = getRandomNumber(minNumber, maxNumber);
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
