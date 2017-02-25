import flow from '../';

const gameFlow = () => {
  const challenge = 'Find the greatest common divisor of given numbers.';
  const count = 3;
  const game = () => {
    const num1 = Math.floor(100 * Math.random());
    const num2 = Math.floor(10 * Math.random());
    const getGcd = (x, y) => {
      let a = x;
      let b = y;
      if (a === 0 || b === 0) {
        return b;
      } else if (b === 0) {
        return a;
      }
      while (a !== 0 && b !== 0) {
        if (a >= b && b > 0) {
          a %= b;
        } else if (a < b && a > 0) {
          b %= a;
        }
      }
      return a + b;
    };
    const result = String(getGcd(num1, num2));
    const task = `${String(num1)} ${String(num2)}`;
    return [task, result];
  };
  flow(challenge, game, count);
};
export default gameFlow;
