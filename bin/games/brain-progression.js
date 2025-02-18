#!/usr/bin/env node
import * as client from '../src/index.js';

const prepareQuestion = () => {
  const numberOfelements = client.getRandomNumber(12, 5);
  const firstProgressionNumber = client.getRandomNumber(20);
  const progressionStep = client.getRandomNumber(5);
  const missedElementNo = client.getRandomNumber(numberOfelements);
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

const rungame = () => {
  client.runGame('brain-progression', 'What number is missing in the progression?.', prepareQuestion);
};

rungame();
