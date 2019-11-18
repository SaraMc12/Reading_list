

function searchABook() {
    //  call on google api to display search resutls (node BookSearch.js moby dick to test)
    queryURL = 'https://jsonplaceholder.typicode.com/todos/1'
  }
  
  GET(queryURL)
    .then(function(response) {
      const BookInfoArray = response.data.items;
      // create a string that allows the first 5 books from api to be called  and set paramaters of what information is brought back.
      const consoleTable = [];
      for (let index = 0; index < 5; index++) {
        let bookId = index + 1;
        let bookTitle = BookInfoArray[index].volumeInfo.title;
        let bookAuthor = BookInfoArray[index].volumeInfo.authors;
        let bookPublisher = BookInfoArray[index].volumeInfo.publisher;
  
        // consoleTable is created to push each api element into the table created in the console
        consoleTable.push({
          Item: bookId,
          Title: bookTitle,
          Author: bookAuthor,
          Publisher: bookPublisher
        });
    }
    console.table(consoleTable);
    selectBook(consoleTable);
    //  NICE TO HAVE FOR LATER
    // userPrompt(consoleTable.map(function(item) { return item.Item + ' ' + item.Title;}))
    //console.log(JSON.stringify(response.data, null, 2))
    // if (err) {
    //   return console.log('Error occurred: ' + err);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });

  module.exports = queryResponse;