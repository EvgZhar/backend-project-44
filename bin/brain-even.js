#!/usr/bin/env node
import readLine from "readline-sync";
import askName from "./src/cli.js";

export const brainEven = () => {
    const userName = askName();
    const requiredNoOfQestions = 3;
    let correctAnswers = 0;
    while (correctAnswers < requiredNoOfQestions) {
        const randomNUmber = Math.round(100 * Math.random()) + 1;
        const givenAnwser = readLine.question(`Question: ${randomNUmber} \nYour answer:`);
        const correctAnswer = (randomNUmber % 2 === 0) ? "yes" : "no"
        const isGivenAnswerCorrect = givenAnwser === correctAnswer;

        if(isGivenAnswerCorrect) {
        correctAnswers += 1;
        console.log("Correct!");
        }
        else {
        correctAnswers = 0;
        console.log(`'${givenAnwser}' is wrong answer;(. Correcet answer was '${correctAnswer}'.`); 
        console.log(`Let's try again, ${userName}`);
        return false;
        }   
    }
    console.log(`Congratulations, ${userName}`); 
    return true;
}
brainEven();

