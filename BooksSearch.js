
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

 

searchABook()

// create a function that sends out a get request to google API and brings back desired response
function searchABook(){
  console.log("search-a-book")
  //  call on google api to display search resutls (node BookSearch.js moby dick to test)
    queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userSearch +"&key=" + process.env.GOOGLE_BOOKS_ID;
   console.log(process.env.GOOGLE_BOOKS_ID, queryURL);
}

