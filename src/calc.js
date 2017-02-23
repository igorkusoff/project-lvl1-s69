import readlineSync from 'readline-sync';
import welcome from './';
import askName from './askname';
import randomNumber from './random-number';

export default () => {
  welcome();
  console.log('What is the result of the expression?\n');
  const name = askName();
  const calc = (operators, count) => {
    if (count > 2) {
      return console.log(`Congratulations, ${name}!`);
    }
    const num1 = randomNumber();
    const num2 = randomNumber();
    const operator = operators[count];
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    let result = 0;
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    }
    if (result !== Number(answer)) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
    return calc(operators, count + 1);
  };
  return calc(['+', '-', '*'], 0);
};
