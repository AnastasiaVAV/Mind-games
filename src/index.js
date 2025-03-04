import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const correctAnswerCounter = 3;

const launchTheGame = (rules, game) => {
  const userName = greetUser();
  console.log(rules);

  for (let i = 0; i < correctAnswerCounter; i += 1) {
    const [guestion, correctAnswer] = game();
    const answer = readlineSync.question(`Question: ${guestion}\nYour answer: `);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default launchTheGame;
