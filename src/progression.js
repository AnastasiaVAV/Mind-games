import getRandomNumber from './random.js';

const maxFirstNumber = 50;
const stepMax = 10;
const stepMin = 1;
const maxLength = 10;
const minLength = 5;

const getRandomProgression = () => {
  const array = [getRandomNumber(maxFirstNumber)];
  const stepOfProgression = getRandomNumber(stepMax, stepMin);
  const lengthOfProgression = getRandomNumber(maxLength, minLength);
  for (let i = 1; i < lengthOfProgression; i += 1) {
    const nextNumber = array[array.length - 1] + stepOfProgression;
    array.push(nextNumber);
  }
  return array;
};

export default getRandomProgression;
