import runGame from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const prepareQuestion = () => {
  const numberOfelements = getRandomNumber(12, 5);
  const firstProgressionNumber = getRandomNumber(20);
  const progressionStep = getRandomNumber(5);
  const missedElementNo = getRandomNumber(numberOfelements);
  let expectedAnswer;
  let nextNumber = firstProgressionNumber;
  let expressionStr = nextNumber.toString();

  for (let i = 1; i <= numberOfelements; i += 1) {
    nextNumber += progressionStep;
    if (i === missedElementNo) {
      expressionStr = i === 1 ? '..' : `${expressionStr} ..`;
      expectedAnswer = nextNumber.toString();
    } else {
      expressionStr = `${expressionStr} ${nextNumber}`;
    }
  }

  return [expressionStr, expectedAnswer];
};

export default () => {
  runGame('What number is missing in the progression?', prepareQuestion);
};