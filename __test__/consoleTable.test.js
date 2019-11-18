const consoleTable = require('./consoleTable');

test('this list should include the bookId ', () => {
    expect(consoleTable).toContain('bookId');
    expect(new Set(consoleTable)).toContain('bookId');
  });

 