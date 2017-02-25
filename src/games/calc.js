import flow from '../';

const gameFlow = () => {
  const challenge = 'What is the result of the expression?\n';
  const count = 3;
  const game = () => {
    const randomOperator = () => {
      const random = Math.floor(Math.random() * ((4 - 1) + 1));
      if (random === 1) {
        return '+';
      } else if (random === 2) {
        return '-';
      }
      return '*';
    };
    const x = Math.floor(100 * Math.random());
    const y = Math.floor(10 * Math.random());
    const operator = randomOperator();
    const getResult = (num1, num2, oper) => {
      if (oper === '+') {
        return num1 + num2;
      } else if (oper === '-') {
        return num1 - num2;
      }
      return num1 * num2;
    };
    const task = `${String(x)} ${operator} ${String(y)}`;
    const result = getResult(x, y, operator);
    return [task, result];
  };
  flow(challenge, game, count);
};
export default gameFlow;
