import getRandomNumber from '../random.js';
// import launchTheGame from '../index.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

export const getGameRound = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [question, correctAnswer];
};
