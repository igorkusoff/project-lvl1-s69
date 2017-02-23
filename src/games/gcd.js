import readlineSync from 'readline-sync';
import randomNumber from '../random-number';
import getGcd from '../get-gcd';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const iter = (count) => {
    if (count > 2) {
      return console.log(`Congratulations, ${name}!`);
    }
    const num1 = randomNumber();
    const num2 = randomNumber();
    const result = getGcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (result !== Number(answer)) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
    return iter(count + 1);
  };
  return iter(0);
};
