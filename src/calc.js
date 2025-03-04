import getRandomNumber from './random.js';

const operations = ['-', '+', '*'];

const getRandomOperation = () => {
  const operation = operations[getRandomNumber(operations.length, 0)];
  return operation;
};

const getRandomCalc = () => {
  const num1 = getRandomNumber(25);
  const num2 = getRandomNumber(25);
  const operation = getRandomOperation();
  const calc = `${num1} ${operation} ${num2}`;
  let result;

  switch (operation) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return [calc, result.toString()];
};

export default getRandomCalc;
