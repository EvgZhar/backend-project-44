import readLine from "readline-sync";

export default () => {
    const userName = readLine.question("May I have your name? ");
    console.log(`Hello, ${userName}`);
}