//export default () => console.log('\nWelcome to the Brain Games!\n');
import readlineSync from 'readline-sync';

const challenge = '';
const flow = (challenge, game, count) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(challenge);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const questions = (game, count) => {
    const [task, result] = game();
    if (count === 0) {
      // success
      return console.log(`Congratulations, ${name}!`);
    }
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === result) {
      console.log('Correct!');
      return questions(game, count - 1);
    }
    // fail
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${name}!`);
  };
return questions(game, count);
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
