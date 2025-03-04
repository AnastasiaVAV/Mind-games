import getRandomNumber from './random.js';

const getRandomGcd = () => {
  let num1 = getRandomNumber(100);
  let num2 = getRandomNumber(100);
  const numbers = `${num1} ${num2}`;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  const gcd = num1;
  return [numbers, gcd.toString()];
};

export default getRandomGcd;
