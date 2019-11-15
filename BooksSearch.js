
// test to make sure command line is working
console.log('hey!');
// protects api key 
require('dotenv').config()
// allows api calls to be made 
var axios = require("axios");

console.log("--\n", process.argv,"\n--");
// creates search paramaters for user to search for a book and have it return as a string of text
var userSearch = process.argv.splice(2).join(" ");
// this is the query string for the api
var queryURL;
// this creats a more readable and organized way form of information by putting the data into tables inside the console
const cTable = require('console.table');
 

searchABook()

// create a function that sends out a get request to google API and brings back desired response
function searchABook(){
  console.log("search-a-book")
  //  call on google api to display search resutls (node BookSearch.js moby dick to test)
    queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userSearch +"&key=" + process.env.GOOGLE_BOOKS_ID;
   console.log(process.env.GOOGLE_BOOKS_ID, queryURL);
}

axios.get(queryURL).then(function (response) {

  var BookInfoArray=response.data.items;
 // create a string that allows the first 5 books from api to be called  and set paramaters of what information is brought back.
 var consoleTable=[];
  for (let index = 0; index < 5; index++) {
    let bookTitle = BookInfoArray[index].volumeInfo.title;
    let bookAuthor = BookInfoArray[index].volumeInfo.authors;
    let bookPublisher = BookInfoArray[index].volumeInfo.publisher;
// consoleTable is created to push each api element into the table created in the console
   consoleTable.push({
      Title: bookTitle,
      Author: bookAuthor,
      Publisher: bookPublisher
    });
    
  }
  console.table(consoleTable);

   //console.log(JSON.stringify(response.data, null, 2))
    // if (err) {
    //   return console.log('Error occurred: ' + err);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
