import flow from '../';

const challenge = 'What number is missing in this progression?';
const count = 3;
const gameFlow = () => {
  const game = () => {
    const progression = () => {
      const firstNum = Math.floor(10 * Math.random()) + 1;
      const step = Math.floor(10 * Math.random()) + 1;
      const random = Math.floor(10 * Math.random());
      const array = [firstNum];
      const iter = (a, newArr, accum) => {
        let acc = accum;
        const arr = newArr;
        if (acc === 9) {
          const result = String(arr[random]);
          arr[random] = '..';
          const task = arr.join(' ').toString();
          return [task, result];
        }
        arr[acc + 1] = arr[acc] + step;
        acc += 1;
        return iter(a, arr, acc);
      };
      return iter(step, array, 0);
    };
    return progression();
  };
  flow(challenge, game, count);
};
export default gameFlow;
