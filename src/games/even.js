import flow from '../';

const gameFlow = () => {
  const challenge = 'Answer "yes" if number even otherwise answer "no".\n';
  const count = 3;
  const game = () => {
    const isEven = (n) => {
    const answer = n % 2 === 0 ? 'yes' : 'no';
    return answer;
    };
    const task = Math.floor(100 * Math.random());
    const result = isEven(task);
    return [task, result];
  };
  flow(challenge, game, count);
};
export default gameFlow;
