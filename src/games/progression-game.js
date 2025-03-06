import getRandomProgression from '../progression.js';
import getRandomNumber from '../random.js';
import launchTheGame from '../index.js';

const rules = 'What number is missing in the progression?';
const minIndex = 0;

const getGameRound = () => {
  const array = getRandomProgression();
  const randomIndex = getRandomNumber(array.length - 1, minIndex);
  const question = [...array];
  const CorrectAnswer = question[randomIndex];
  question[randomIndex] = '..';
  return [question, CorrectAnswer.toString()];
};

const launchGame = () => launchTheGame(rules, getGameRound);

export default launchGame;
