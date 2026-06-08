import readlineSync from 'readline-sync';
import crypto from 'crypto';
import { greetUser } from '../cli.js';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

export function gameStart() {
  const nameUser = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  
  for (let i = 0; i < 3; i++) {
    const randomNumber = crypto.randomInt(0, 100);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${nameUser}!`);
}