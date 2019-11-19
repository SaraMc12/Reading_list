
const selectBook = require('./selectBook')

test('bookSelected', () => {
    let bookSelected = null;
    expect(bookSelected).not.toBeTruthy();
    expect(bookSelected).toBeFalsy();
  });