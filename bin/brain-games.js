#!/usr/bin/env node

import greetUser from '../src/cli.js'

console.log('node bin/brain-games.js');
console.log('Welcome to the Brain Games!');
greetUser();
setTimeout(() => { console.log("Закончили"); }, 2000);