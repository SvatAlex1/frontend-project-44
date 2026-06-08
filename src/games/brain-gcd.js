import readlineSync from 'readline-sync';
import crypto from 'crypto';
import { greetUser } from '../cli.js';

function findGcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export function gameStart() {
  const nameUser = greetUser();
  console.log('Find the greatest common divisor of given numbers.');
  
  for (let i = 0; i < 3; i++) {
    const firstRandomNum = crypto.randomInt(0, 100);
    const secondRandomNum = crypto.randomInt(0, 100);
    
    console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);
    const answerUser = Number(readlineSync.question('Your answer: '));
    const correctAnswer = findGcd(firstRandomNum, secondRandomNum);
    
    if (answerUser !== correctAnswer) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${nameUser}!`);
}