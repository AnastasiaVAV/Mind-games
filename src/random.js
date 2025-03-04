const getRandomNumber = (max, min = 0) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

export default getRandomNumber;
