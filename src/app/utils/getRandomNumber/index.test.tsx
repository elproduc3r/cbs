import { getRandomNum } from ".";

describe('getRandomNum (utils)', () => {
  test('get number within range', () => {
    const min = 1;
    const max = 10;
    const randomNum = getRandomNum(min, max);
    expect(randomNum).toBeLessThanOrEqual(max);
    expect(randomNum).toBeGreaterThanOrEqual(min);
  })
});