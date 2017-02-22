// get Greatest common divisor
export default (a, b) => {
  if (a === 0 || b ===0) {
    return b;
  } else if (b === 0) {
    return a;
  } else
    while (a !== 0 && b !== 0) {
      if (a >= b && b > 0) {
        a %= b;
      } else if (a < b && a > 0) {
        b %= a;
      }
    }
    return a + b;
};
