import flow from '../';

const challenge = 'Is this number a prime?';
const count = 3;
const isPrime = (a) => {
  if (a > 1) {
    if (a === 2) {
      return true;
    } else if (a > 2 && a % 2 === 0) {
      return false;
    } else if (a > 3 && a % 3 === 0) {
      return false;
    }
    return true;
  }
  return false;
};
const gameFlow = () => {
  const game = () => {
    const random = Math.floor(100 * Math.random());
    const task = `${String(random)}`;
    const result = isPrime(random) ? 'yes' : 'no';
    return [task, result];
  };
  flow(challenge, game, count);
};
export default gameFlow;
