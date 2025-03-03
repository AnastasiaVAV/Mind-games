import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return randomNumber;
};

const checkParity = () => {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const correctAnswerCounter = 3;

  for (let i = 0; i < correctAnswerCounter; i += 1) {
    const number = getRandomNumber();
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default checkParity;
