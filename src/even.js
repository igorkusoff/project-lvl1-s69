import readlineSync from 'readline-sync';
import askName from './';

export default () => {
  const name = askName();
  const inverseAnswer = (answer) => {
    if (answer === 'yes') {
      return 'no';
    }
    return 'yes';
  };

  const quest = (numbers, count) => {
    if (count > 2) {
      return console.log(`Congratulations, ${name}!`);
    }
    const number = numbers[count];
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      return quest(numbers, count + 1);
    }
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${inverseAnswer(answer)}'.\n Let's try again, ${name}!`);
  };

  return quest([15, 6, 15], 0);
};
