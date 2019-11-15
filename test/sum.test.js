const sum = require('../src/sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// working with async data
// test('user fetched book', ()=>{
//   expect.assertions(1);
//   return functions.fetchBooks().then(data =>(

//   ))
// });


test('return the sum of two numbers', () => {
  expect(sum.sum(3,4)).toBe(7);
})