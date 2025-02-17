#!/usr/bin/env node
import * as client from "./src/cli.js";

const getExpressionAndValueCont = (operand_1, operand_2, operator) => {
    console.log("getExpressionAndValueCont");
    switch (operator) {
        case 1: //+
            return [`${operand_1} + ${operand_2}`, operand_1 + operand_2];
            break;
        case 2: //-
            return [`${operand_1} - ${operand_2}`, operand_1 - operand_2];
            break;
        case 3: //*
            return [`${operand_1} * ${operand_2}`, operand_1 * operand_2];
            break;            
    }
}

export const brainCalc = (requiredNoOfQestions = 3) => {
    client.welcomeUser("brain-calc");
    const userName = client.getUserName();
    client.greetUser(userName);
    
    let correctAnswers = 0;
    //console.log('What is the result of the expression?');
    while (correctAnswers < requiredNoOfQestions) {
        const operator = client.getRandomNumber(3);
        const operand_1 = client.getRandomNumber(40);
        const operand_2 = client.getRandomNumber(40);
        let expressionStr, expectedAnswer;
        [expressionStr, expectedAnswer] = getExpressionAndValueCont(operand_1. operand_2, operator);
        const givenAnwser = client.getUserAnswer(expressionStr);
        
        if(!client.checkAndNotifyUser(expectedAnswer, givenAnwser, userName)){
            client.cheerUser(userName);
            return;
        }
        correctAnswers += 1;        
    }
    client.praiseUser(userName); 
    return true;
}
brainCalc(3);