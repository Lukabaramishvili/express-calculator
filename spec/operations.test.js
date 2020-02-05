const { add, subtract, multiply, divide } = require('../lib/operations')

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('sub 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});

test('multiplication function should return 3 to 2 equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

test('division function should return 4 to 2 equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});

test('big number should return scientific notation', () => {
  const result = multiply(20000000000000, 10000000000000)
  expect("" + result).toEqual(
    expect.stringContaining("e")
  );
});

console.log(add);
