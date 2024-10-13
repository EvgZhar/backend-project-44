import getAnswer from '../src/cli.js';

export default (userName) => {
  const requiredNoOfQestions = 3;
  let correctAnswers = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  while (correctAnswers < requiredNoOfQestions) {
    const randomNUmber = Math.round(100 * Math.random()) + 1;
    const givenAnwser = getAnswer(`Question: ${randomNUmber}`);
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
    }
  }
  console.log(`Congratulations, ${userName}`);  
};

//console.log('Brain-even was loaded');