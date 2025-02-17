#!/usr/bin/env node
import * as client from "../src/index.js";

const prepareQuestion = () => {
    const isEven = (number) => number % 2 === 0;
    const randomNumber = client.getRandomNumber(100); 
    const expectedAnswer = isEven(randomNumber) ? "yes" : "no";
    return [randomNumber, expectedAnswer];  
}

const rungame = () =>{
    client.runGame('brain-even', 'Answer "yes" if the number is even, otherwise answer "no".', prepareQuestion);
};

rungame();

