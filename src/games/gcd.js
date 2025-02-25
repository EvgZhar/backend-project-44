import runGame from '../src/index.js';
import getRandomNumber from '../src/utils.js';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

const prepareQuestion = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const gcdValue = NOD(number1, number2);

  const expressionStr = `${number1} ${number2}`;
  const expectedAnswer = gcdValue.toString();
  return [expressionStr, expectedAnswer];
};

export default () => {
  runGame('Find the greatest common divisor of given numbers.', prepareQuestion);
};