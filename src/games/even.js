import runGame from '../index.js';
import * as utils from '../utils.js';

const prepareQuestion = () => {
  const isEven = (number) => number % 2 === 0;
  let randomNumber = utils.getRandomNumber(100, 2);
  if (!randomNumber) {
    randomNumber = 2;
  }
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', prepareQuestion);
};
