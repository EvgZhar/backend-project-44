#!/usr/bin/env node

import getUser from '../src/cli.js';
import even from './brain-even.js';

console.log('node bin/brain-games.js');
console.log('Welcome to the Brain Games!');
const curUserName = getUser();
console.log(`Hello, ${curUserName}!`);

even(curUserName);

setTimeout(() => { console.log("Закончили"); }, 2000);