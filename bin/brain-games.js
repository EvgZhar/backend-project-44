#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('node bin/brain-games.js');
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('Your answer: ');
console.log(`Hello, ${userName}`);
setTimeout(() => { console.log("Закончили"); }, 2000);