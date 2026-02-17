import readlineSync from 'readline-sync';
console.log('Welcome to Brain game!');
const userName = readlineSync.question('Your name? ');
console.log(`Welcome to, ${userName}! Brain game.`);
