
// test to make sure command line is working
console.log('weeee!');
// protects api key 
require('dotenv').config()
// allows api calls to be made 
var axios = require("axios");
var keys = require("./src/keys");
// console.log("--\n", process.argv,"\n--");
// creates search paramaters for user to search for a book and have it return as a string of text
var userSearch = process.argv.splice(2).join(" ");
// this is the query string for the api
var queryURL;
// this creats a more readable and organized way form of information by putting the data into tables inside the console
const cTable = require('console.table');
// this is what allows me to create questions to prompt the user in the terminal like asking them to search for something.
var inquirer = require("inquirer");

// // Inquierer will prompt the user so they know what to do and such
// // inquirer.prompt([
//   inquirer
//   .prompt([
//     // Here we create a basic text prompt.
//     {
//       type: "input",
//       message: "Hi! welcome, please type in a name or genre of a book you would like to search for",
//       name: "bookname"
//     },
//    
//   .then(function(inquirerResponse) {
//     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
//     if (inquirerResponse.confirm) {
//       console.log("\nAwesome choice!" + inquirerResponse.username);
//       console.log("has now been added to your reading list\n");
//     }
//     else {
  //     console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
  //   }
  // });


 searchABook()

// create a function that sends out a get request to google API and brings back desired response


// THIS IS THE ORIGINAL
function searchABook(){
  console.log("search-a-book")
  //  call on google api to display search resutls (node BookSearch.js moby dick to test)
    queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userSearch +"&key=" + process.env.GOOGLE_BOOKS_ID;
 
}

axios.get(queryURL).then(function (response) {

  const BookInfoArray=response.data.items;
 // create a string that allows the first 5 books from api to be called  and set paramaters of what information is brought back.
 const consoleTable=[];
  for (let index = 0; index < 5; index++) {
    let bookId = BookInfoArray[index].items;
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
 
// add a .then prompt to make this part of the inquirer code happen after api call

  inquirer.prompt([  
    {
             type: "list",
            message: "Which book would you like to add to your reading list?",
             choices: ["Book1", "Book2", "Book3", "Book4", "Book5"],
             name: "book"
           },
           // Here we ask the user to confirm.
          {
            type: "confirm",
            message: "Are you sure:",
           name: "confirm",
             default: true
           }
  ])
  .then(function(inquirerResponse) {
        
       if (inquirerResponse.confirm) {
           console.log("\nAwesome choice!" + inquirerResponse.username);
           console.log("has now been added to your reading list\n");
         }
         else {
           console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
         }
       });
    
    
