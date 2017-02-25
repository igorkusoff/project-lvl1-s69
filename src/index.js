//export default () => console.log('\nWelcome to the Brain Games!\n');
import readlineSync from 'readline-sync';

const challenge = '';
const flow = (challenge, task, result, count) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(challenge);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
console.log(count);
console.log(task);
console.log(result);
  const questions = (task, result, count) => {
    if (count === 0) {
      // success
      return console.log(`Congratulations, ${name}!`);
    }
    // const number = numbers[count];
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === result) {
      console.log('Correct!');
      return questions(task, result, count - 1);
    }
    // fail
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${name}!`);
  };
return questions(task, result, count);
};

export default flow;
/*
const greeting = 'Welcome to the Brain Games!\n';
const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// flow
const flow = (task, result) => {
  console.log(greeting);
  // console.log(challenge);
  const name = getName();
const greeting = 'Welcome to the Brain Games!\n';
const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

  // questions 1, 2, 3
  //
  // success
  //
  // fail


};

export default flow;
export {
  greeting,
  getName,
//  name
};
*/
