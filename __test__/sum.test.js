const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Ill figure you out one day jest!!!!
const mockCallback = jest.fn();
forEach([0, 5], mockCallback);

expect(mockCallback.mock.calls.length).toBe(5);

