import readlineSync from 'readline-sync';
import crypto from 'crypto';
import { greetUser } from '../cli.js';

function loadDigits() {
  const digits = [];
  const start = crypto.randomInt(0, 100);
  const step = crypto.randomInt(1, 10); // step не должен быть 0
  
  for (let i = 0; i < 10; i++) {
    const currentElement = start + i * step;
    digits.push(currentElement);
  }
  
  return digits;
}

export function progressionGame() {
  const nameUser = greetUser();
  console.log('What number is missing in the progression?');
  
  for (let i = 0; i < 3; i++) {
    const hiddenIndex = crypto.randomInt(0, 10); // 0-9 включительно
    const progression = loadDigits();
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    
    console.log(`Question: ${progression.join(' ')}`);
    const answerUser = Number(readlineSync.question('Your answer: '));
    
    if (answerUser !== correctAnswer) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${nameUser}!`);
}