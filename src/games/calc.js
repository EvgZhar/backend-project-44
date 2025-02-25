import runGame from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const prepareQuestion = () => {
  const operator = getRandomNumber(3);
  const operand1 = getRandomNumber(40);
  const operand2 = getRandomNumber(40);
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