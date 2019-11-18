
// test to make sure command line is working and to remember which branch I am working on.
console.log("Woodle doot");

// SET UP REQUIRMENTS NEEDED

const fs = require("fs");
const axios = require("axios");
let userSearchParamaters = process.argv.splice(2).join(" ");
let queryURL;
const cTable = require("console.table");
const inquirer = require("inquirer");

// LOAD JSON READING LIST

let rawdata = fs.readFileSync("./src/readingList.json");
let readingList = JSON.parse(rawdata);
// console.log(readingList);

selectBook = consoleTable => {
  inquirer.prompt([
      {
        type: "list",
        message: "Which book would you like to add to your reading list?",
        choices: [1, 2, 3, 4, 5],
        name: "book"
      }
      // Here we ask the user to confirm.
    ])
    .then(function(inquirerResponse) {
      if (inquirerResponse.book) {
        console.log("\nAwesome choice!" + inquirerResponse.book);
         console.log("has now been added to your reading list\n");
        // //  add book selected to reading list
        let bookSelected = consoleTable[inquirerResponse.book];
        readingList.push(bookSelected);
        console.log(readingList);

        try {
          fs.writeFileSync(
            "./src/readingList.json",
            JSON.stringify(readingList)
          );
        } catch (err) {
          console.error(err);
        }
      }
    });
};

userPrompt = consoleTable => {
  inquirer.prompt([
    {
      type: "list",
      message: "Which book would you like to add to your reading list?",
      choices: consoleTable,
      name: "book"
    }
    // Here we ask the user to confirm.
  ]);
};


searchABook();

// create a function that sends out a get request to google API and brings back desired response
console.log('HERE ARE SOME NEW BOOKS FOR YOU.')
// THIS IS THE ORIGINAL
function searchABook() {
  //  call on google api to display search resutls (node BookSearch.js moby dick to test)
  queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userSearchParamaters;
}

axios.get(queryURL)
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

// add a .then prompt to make this part of the inquirer code happen after api call
