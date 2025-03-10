import getRandomNumber from './random.js';

const minFirstNum = 0;
const maxFirstNum = 10;
const minStep = 1;
const maxStep = 10;
const maxLen = 10;
const minLen = 5;

const getRandomProgression = () => {
  const array = [getRandomNumber(minFirstNum, maxFirstNum)];
  const stepOfProgression = getRandomNumber(minStep, maxStep);
  const lengthOfProgression = getRandomNumber(minLen, maxLen);
  for (let i = 1; i < lengthOfProgression; i += 1) {
    const nextNumber = array[array.length - 1] + stepOfProgression;
    array.push(nextNumber);
  }
  return array;
};

export default getRandomProgression;
