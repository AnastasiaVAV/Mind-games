const getRandomNumber = (max, min = 1) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

export default getRandomNumber;
