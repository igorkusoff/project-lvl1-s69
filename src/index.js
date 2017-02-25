import readlineSync from 'readline-sync';

// const challenge = '';
const flow = (challenge, game, count) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(challenge);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const questions = (newGame, acc) => {
    const [task, result] = game();
    if (acc === 0) {
      // success
      return console.log(`Congratulations, ${name}!`);
    }
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === result) {
      console.log('Correct!');
      return questions(newGame, acc - 1);
    }
    // fail
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${name}!`);
  };
  return questions(game, count);
};
export default flow;
