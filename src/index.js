import readLine from 'readline-sync';
import * as utils from './utils.js';

export default (questionTitle, prepareQuestionFunc) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLine.question('May I have your name? ');
  const requiredNoOfQestions = 3;
  console.log(`Hello, ${userName}!`);

  let correctAnswers = 0;
  console.log(questionTitle);
  while (correctAnswers < requiredNoOfQestions) {
    const [expressionStr, expectedAnswer] = prepareQuestionFunc();
    const givenAnwser = readLine.question(`Question: ${expressionStr} \nYour answer:`);
    if (!utils.checkAndNotifyUser(expectedAnswer, givenAnwser)) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    correctAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
