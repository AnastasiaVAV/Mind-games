import getRandomProgression from '../progression.js';
import getRandomNumber from '../random.js';

export const rules = 'What number is missing in the progression?';
const minIndex = 0;

export const getGameRound = () => {
  const array = getRandomProgression();
  const randomIndex = getRandomNumber(minIndex, array.length - 1);
  const question = [...array];
  const CorrectAnswer = question[randomIndex];
  question[randomIndex] = '..';
  return [question.join(' '), CorrectAnswer.toString()];
};
