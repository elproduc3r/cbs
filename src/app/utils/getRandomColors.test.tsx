import getRandomColors from './getRandomColors';

test('returns correct number of colors', () => {
  const size = 1;
  const result = getRandomColors(size);
  expect(result.length).toEqual(size);
});

test('returns unique colors', () => {
  const size = 3;
  const result = getRandomColors(size);
  expect(result[0]).not.toEqual(result[1]);
  expect(result[0]).not.toEqual(result[2]);
});
