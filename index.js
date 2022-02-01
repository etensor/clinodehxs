// run `node index.js` in the terminal
//import chalk from 'chalk';
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const { faker } = require('@faker-js/faker');

console.log('chalk arqj');

let msg = [];
let idx = 0;
let datx = '';
for (i = 0; i < 5; i++) {
  datx = faker.hacker.phrase();
  //  faker.animal.type();
  msg.push(datx);
}

let printermsg = chalkAnimation.glitch(chalk.green(msg[idx]), 1.5);

setInterval(() => {
  printermsg.replace(msg[idx]);
  idx += 1;
  if (idx === msg.length) {
    idx = 0;
  }
}, 2000);
