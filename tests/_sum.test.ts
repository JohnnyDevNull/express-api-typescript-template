// just for base jest test if everything is fine
import sum from './_sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
