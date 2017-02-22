// get Greatest common divisor
export default (a, b) => {
  let x = a;
  let y = b;
  if (a === 0 || b === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } while (x !== 0 && y !== 0) {
    if (x >= y && y > 0) {
      x %= y;
    } else if (x < y && x > 0) {
      y %= x;
    }
  }
  return x + y;
};
