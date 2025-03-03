import readlineSync from 'readline-sync';

const greetUser = () => {
  const name = readlineSync.question('May I have your name? ');
  const greeting = (`Hello, ${name}!`);
  return greeting;
};

export default greetUser;
