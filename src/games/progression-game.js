import getProgressionForQuestion from '../progression.js';
import launchTheGame from '../index.js';

const rules = 'What number is missing in the progression?';

const checkProgression = () => {
  const [question, correctAnswer] = getProgressionForQuestion();
  return [question, correctAnswer];
};

const launchprogressionGame = () => launchTheGame(rules, checkProgression);

export default launchprogressionGame;
