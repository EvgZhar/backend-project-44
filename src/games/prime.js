import runGame from '../index.js';
import * as utils from '../utils.js';

const prepareQuestion = () => {
  const isPrime = (number) => {
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  const randomNumber = utils.getRandomNumber(100);
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default () => {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', prepareQuestion);
};