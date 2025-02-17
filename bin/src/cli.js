import readLine from "readline-sync";

export const welcomeUser = (gameName = "") => {
    if(gameName){
        console.log(gameName);  
        console.log("");   
    }
    console.log("Welcome to the Brain Games!");
};

export const getUserName = () => {    
    const userName = readLine.question("May I have your name? ");
    return userName;
};

export const greetUser = (userName = "") => console.log(`Hello, ${userName}!`);