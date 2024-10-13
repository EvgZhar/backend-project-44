import readlineSync from 'readline-sync';

export default (questionTxt = 'May I have your name?') => {
  const userName = readlineSync.question(`${questionTxt} `);
  return userName;
}

