import readLine from 'readline-sync';

export const welcomeUser = (gameName = '') => {
  if (gameName) {
    console.log(gameName);
    console.log('');
  }
  console.log('Welcome to the Brain Games!');
};

export const cheerUser = (userName) =>
  console.log(`Let's try again, ${userName}!`);

export const getUserName = () => {
  const userName = readLine.question('May I have your name? ');
  return userName;
};

export const greetUser = (userName = '') => console.log(`Hello, ${userName}!`);

export const praiseUser = (userName = '') =>
  console.log(`Congratulations, ${userName}!`);

export const checkAndNotifyUser = (expectedAnswer, givenAnswer) => {
  if (expectedAnswer !== givenAnswer) {
    console.log(
      `'${givenAnswer}' is wrong answer;(. Correcet answer was '${expectedAnswer}'.`
    );
    return false;
  }
  console.log('Correct!');
  return true;
};

export const getUserAnswer = (questionBody) =>
  readLine.question(`Question: ${questionBody} \nYour answer:`);

export const getRandomNumber = (maxVal = 1, minVal = 1) => {
  return Math.round((maxVal - minVal) * Math.random()) + minVal;
};

export const runGame = (
  gameName,
  questionTitle,
  prepareQuestionFunc,
  requiredNoOfQestions = 3
) => {
  welcomeUser(gameName);
  const userName = getUserName();
  greetUser(userName);

  let correctAnswers = 0;
  console.log(questionTitle);
  while (correctAnswers < requiredNoOfQestions) {
    const [expressionStr, expectedAnswer] = prepareQuestionFunc();
    const givenAnwser = getUserAnswer(expressionStr);
    if (!checkAndNotifyUser(expectedAnswer, givenAnwser)) {
      cheerUser(userName);
      return;
    }
    correctAnswers += 1;
  }
  praiseUser(userName);
};
