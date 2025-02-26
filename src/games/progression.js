import runGame from '../index.js';
import * as utils from '../utils.js';

const prepareQuestion = () => {
  const numberOfelements = utils.getRandomNumber(12, 5);
  const firstProgressionNumber = utils.getRandomNumber(20);
  const progressionStep = utils.getRandomNumber(5);
  const missedElementNo = utils.getRandomNumber(numberOfelements);
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