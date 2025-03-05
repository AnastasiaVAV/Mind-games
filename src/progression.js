import getRandomNumber from './random.js';

const getRandomProgression = (firstNum = 50, stepMax = 10, stepMin = 1, length = 10) => {
  const array = [getRandomNumber(firstNum)];
  const stepOfProgression = getRandomNumber(stepMax, stepMin);
  const lengthOfProgression = getRandomNumber(length, 5);
  for (let i = 1; i < lengthOfProgression; i += 1) {
    const nextNumber = array[array.length - 1] + stepOfProgression;
    array.push(nextNumber);
  }
  return array;
};

const getProgressionForQuestion = () => {
  const array = getRandomProgression();
  const randomIndex = getRandomNumber(array.length - 1, 0);
  const answer = array[randomIndex];
  const newArray = [...array];
  newArray[randomIndex] = '..';
  return [newArray, answer.toString()];
};

export default getProgressionForQuestion;
