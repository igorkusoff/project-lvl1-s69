import flow from '../';

const challenge = 'Balance the given number.';
const count = 3;
const gameFlow = () => {
  const game = () => {
    const random = Math.floor(Math.random() * ((10000 - 100) + 100));
    const balance = (number) => {
      const arrNum = number.toString().split('').map(num => Number(num)).sort();
      while (arrNum[arrNum.length - 1] - arrNum[0] > 1) {
        arrNum[arrNum.length - 1] -= 1;
        arrNum[0] += 1;
        arrNum.sort();
      }
      return arrNum.join('');
    };
    const result = String(balance(random));
    const task = String(random);
    return [task, result];
  };
  flow(challenge, game, count);
};
export default gameFlow;
