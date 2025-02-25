export const checkAndNotifyUser = (expectedAnswer, givenAnswer) => {
  if (expectedAnswer !== givenAnswer) {
    console.log(
      `'${givenAnswer}' is wrong answer;(. Correct answer was '${expectedAnswer}'.`
    );
    return false;
  }
  console.log("Correct!");
  return true;
};

export const getRandomNumber = (maxVal = 1, minVal = 1) => {
  const retVal = Math.round((maxVal - minVal) * Math.random()) + minVal;
  if (!retVal) {
    return minVal;
  }
  return retVal;
};