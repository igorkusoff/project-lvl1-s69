import flow from '../';

const challenge = 'Answer "yes" if number even otherwise answer "no".';
const count = 3;
const correctAnswer = (n) => {
  const answer = n % 2 === 0 ? 'yes' : 'no';
  return answer;
};
const gameFlow = () => {
  const game = () => {
    const task = Math.floor(100 * Math.random());
    const result = correctAnswer(task);
    return [task, result];
  };
  flow(challenge, game, count);
};
export default gameFlow;
