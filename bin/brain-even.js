#!/usr/bin/env node
import * as client from "./src/cli.js";

export const brainEven = (requiredNoOfQestions = 3) => {
    client.welcomeUser("brain-even");
    const userName = client.getUserName();
    client.greetUser(userName);
    const isEven = (number) => number % 2 === 0;
    let correctAnswers = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while (correctAnswers < requiredNoOfQestions) {
        const randomNUmber = client.getRandomNumber(100);
        const givenAnwser = client.getUserAnswer(randomNUmber);
        const expectedAnswer = isEven(randomNUmber) ? "yes" : "no"

        if(client.checkAndNotifyUser(expectedAnswer, givenAnwser) === false){
            client.cheerUser(userName);
            return;
        }
        correctAnswers += 1;
    }
    client.praiseUser(userName); 
    return true;
}
brainEven(3);

