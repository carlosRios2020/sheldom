const calcular = require('./main');

test('Si el número es  igual 3 devuelve true', () => {
  expect(calcular(3)).toBe(1);
});