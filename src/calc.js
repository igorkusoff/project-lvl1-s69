import readlineSync from 'readline-sync';
import askName from './';
import randomNumber from './random-number';

export default () => {
  const name = askName();
  const inverseAnswer = (answer) => {
    if (answer === 'yes') {
      return 'no';
    }
    return 'yes';
  };

  const calc = (operators, count) => {
    if (count > 2) {
      return console.log(`Congratulations, ${name}!`);
    }
    const num1 = randomNumber();
    const num2 = randomNumber();
    const operator = operators[count];
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (operator === '+') {
    const result = num1 + num2;
    } else if (operator === '-') {
    const result = num1 - num2;
    } else if (operator === '*') {
    const result = num1 * num2;
    }
  if (result === answer) {
    console.log('Correct!');
    return calc(operators, count + 1);
  }

  return console.log(`'${answer}' is wrong answer ;(. 
    Correct answer was '${result}'.\n Let's try again, ${name}!`);

  };

  return calc([+, -, *], 0);
};

