#!/usr/bin/env node
import * as client from '../src/index.js';

const prepareQuestion = () => {
  const operator = client.getRandomNumber(3);
  const operand1 = client.getRandomNumber(40);
  const operand2 = client.getRandomNumber(40);
  switch (operator) {
    case 1: //+
      return [
        `${operand1} + ${operand2}`,
        (operand1 + operand2).toString(),
      ];
    case 2: //-
      return [
        `${operand1} - ${operand2}`,
        (operand1 - operand2).toString(),
      ];
    case 3: //*
      return [
        `${operand1} * ${operand2}`,
        (operand1 * operand2).toString(),
      ];
  }
};
const rungame = () => {
  client.runGame(
    'brain-calc',
    'What is the result of the expression?',
    prepareQuestion
  );
};
rungame();
