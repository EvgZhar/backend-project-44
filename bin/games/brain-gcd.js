#!/usr/bin/env node
import * as client from "../src/index.js";
import {gcd} from "mathjs";

const prepareQuestion = () => {
    const number1 = client.getRandomNumber(100);
    const number2 = client.getRandomNumber(100);    
    const gcdValue = gcd(number1, number2);
    
    const expressionStr = `${number1} ${number2}`;
    const expectedAnswer = gcdValue.toString();
    return [expressionStr, expectedAnswer];  
}

const rungame = () =>{
    client.runGame('brain-gcd', 'Find the greatest common divisor of given numbers.', prepareQuestion);
};

rungame();

