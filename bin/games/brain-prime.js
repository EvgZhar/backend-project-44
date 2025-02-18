#!/usr/bin/env node
import * as client from '../src/index.js';

const prepareQuestion = () => {
  const isPrime = (number) => {
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  const randomNumber = client.getRandomNumber(100);
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

const rungame = () => {
  client.runGame('brain-prime', 'Answer "yes" if given number is prime. Otherwise answer "no".', prepareQuestion);
};

rungame();
