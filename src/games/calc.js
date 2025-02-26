import runGame from '../index.js';
import * as utils from '../utils.js';

const prepareQuestion = () => {
  const operator = utils.getRandomNumber(3);
  const operand1 = utils.getRandomNumber(40);
  const operand2 = utils.getRandomNumber(40);
  switch (operator) {
    case 1: //+
      return [`${operand1} + ${operand2}`, (operand1 + operand2).toString()];
    case 2: //-
      return [`${operand1} - ${operand2}`, (operand1 - operand2).toString()];
    case 3: //*
      return [`${operand1} * ${operand2}`, (operand1 * operand2).toString()];
    default:
      return [];
  }
};
export default () => {
  runGame('What is the result of the expression?', prepareQuestion);
};
