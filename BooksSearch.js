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


selectBook = consoleTable => {
  inquirer.prompt([
      {
        type: "list",
        message: "Which book would you like to add to your reading list?",
        choices: [1, 2, 3, 4, 5],
        name: "book"
      }
      
    ])
    .then(function(selectionConfirmation) {
      if (selectionConfirmation.book) {
        console.log("\nAwesome choice!" + selectionConfirmation.book);
         console.log("has now been added to your reading list\n");
      
        let bookSelected = consoleTable[selectionConfirmation.book];
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
   
  ]);
};

searchABook();

console.log('HERE ARE SOME NEW BOOKS FOR YOU.');

function searchABook() {
  
  queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userSearchParamaters;
};

axios.get(queryURL)
  .then(function(response) {
    const BookInfoArray = response.data.items;
    const consoleTable = [];
    for (let index = 0; index < 5; index++) {
      let bookId = index + 1;
      let bookTitle = BookInfoArray[index].volumeInfo.title;
      let bookAuthor = BookInfoArray[index].volumeInfo.authors;
      let bookPublisher = BookInfoArray[index].volumeInfo.publisher;

      consoleTable.push({
        Item: bookId,
        Title: bookTitle,
        Author: bookAuthor,
        Publisher: bookPublisher
      });
    };

    console.table(consoleTable);
    selectBook(consoleTable);
  })
  .catch(function(error) {
  
    console.log(error);
  })
  .finally(function() {
   
  });

