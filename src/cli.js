import readlineSync from 'readline-sync';

const greetUser = () => {
  const name = readlineSync.question('May I have your name? ');
  let greeting = (`Hello, ${name}!`);
  return greeting;
};

export default greetUser;