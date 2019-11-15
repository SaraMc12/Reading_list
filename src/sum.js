function sum(a, b) {
  return a + b;
}

function searchABook() {
  for (let index = 0; index < 5; index++) {
    let bookTitle = BookInfoArray[index].volumeInfo.title;
    let bookAuthor = BookInfoArray[index].volumeInfo.authors;
    let bookPublisher = BookInfoArray[index].volumeInfo.publisher;

    tempTable.push({
      Title: bookTitle,
      Author: bookAuthor,
      Publisher: bookPublisher
    });
  }
}
// 
  module.exports = sum;

