const queryResponse = require('./queryResponse');


test(" Item: bookId,Title: bookTitle,Author: bookAuthor,Publisher: bookPublisher"
, done => {
    function callback(data) {
      expect(data).toBe(" Item: bookId,Title: bookTitle,Author: bookAuthor,Publisher: bookPublisher");
      done();
    }
  
     fetchData(callback);
  });